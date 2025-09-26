import { WebSocketServer, WebSocket } from 'ws';
import chokidar from 'chokidar';
import { promises as fs } from 'fs';
import * as path from 'path';
import { Trie } from 'merkle-patricia-tree';
import { TetraNode, IToolCommand, NodeUpdateMessage } from '@opencode-v5/core';

// ... (Argument Parsing & Paths)

// --- In-memory State ---
interface NodeHistory {
    latest: TetraNode;
    historyTrie: Trie;
}
const nodeStates: Map<string, NodeHistory> = new Map();

// --- Core Logic ---

const processFile = async (filePath: string) => {
    console.log(`Processing file: ${filePath}`);
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        const stats = await fs.stat(filePath);
        const timestamp = stats.mtime.getTime();

        const vertexContents = parseContentToVertices(content);
        if (!vertexContents) {
            console.warn(`Skipping ${filePath}: Could not parse all four vertices.`);
            return;
        }

        const node = new TetraNode(vertexContents);
        
        // Get or create history for this node
        let nodeHistory = nodeStates.get(node.nodeId);
        if (!nodeHistory) {
            nodeHistory = { latest: node, historyTrie: new Trie() };
        }

        // Add current state to history trie, keyed by timestamp
        await nodeHistory.historyTrie.put(Buffer.from(String(timestamp)), Buffer.from(JSON.stringify(node)));
        nodeHistory.latest = node;
        nodeStates.set(node.nodeId, nodeHistory);

        console.log(`✅ Processed and logged history for node ${node.nodeId}`);

    } catch (error) {
        console.error(`Failed to process file ${filePath}:`, error);
    }
};

// ... (rest of file)
// --- Global Relay Client ---
const globalRelayClient = new WebSocket('ws://localhost:8080');
globalRelayClient.on('open', () => console.log('Runtime connected to Global Relay Server.'));
globalRelayClient.on('error', (err) => console.error('Relay connection error:', err));

// --- RPC Server ---
const wss = new WebSocketServer({ port });

async function handleCommand(command: IToolCommand, ws: WebSocket) {
    let responsePayload: any;
    switch (command.commandName) {
        case 'ProcessFile':
            await processFile(command.arguments.filePath);
            responsePayload = { status: 'ok' };
            break;
        case 'GetAllNodes':
            responsePayload = await handleGetAllNodes();
            break;
        case 'GetHistoryProof':
            responsePayload = await handleGetHistoryProof(command.arguments as any);
            break;
        case 'WikifyAndTag':
            responsePayload = await handleWikifyAndTag(command.arguments as any);
            break;
        case 'PublishNode':
            responsePayload = await handlePublishNode(command.arguments as any);
            break;
        default:
            console.warn(`Unknown command received: ${command.commandName}`);
            responsePayload = { error: `Unknown command: ${command.commandName}` };
    }

    // Send response back to the original requester
    ws.send(JSON.stringify({ type: 'MCP_RESPONSE', requestId: command.id, payload: responsePayload }));
}

async function handlePublishNode(args: { nodeId: string }) {
    try {
        const nodePath = path.join(nodesPath, `${args.nodeId}.json`);
        const nodeContent = await fs.readFile(nodePath, 'utf-8');
        const node: TetraNode = JSON.parse(nodeContent);

        // Construct the update message
        const updateMessage: NodeUpdateMessage = {
            type: 'node_update',
            nodeId: node.nodeId,
            staticCentroid: node.staticCentroid,
            dynamicCentroid: node.dynamicCentroid || '',
            timestamp: Date.now(),
            lastOutputRef: node.lastOutputRef,
        };

        // Publish to the global relay
        if (globalRelayClient.readyState === WebSocket.OPEN) {
            globalRelayClient.send(JSON.stringify(updateMessage));
            console.log(`Published update for node ${args.nodeId} to global relay.`);
            return { status: 'published' };
        } else {
            return { error: 'Not connected to global relay server.' };
        }
    } catch (error) {
        console.error(`Error publishing node ${args.nodeId}:`, error);
        return { error: 'Failed to read or publish node.' };
    }
}

async function handleGetAllNodes() {
    try {
        const nodeFiles = await fs.readdir(nodesPath);
        const nodePromises = nodeFiles
            .filter(file => file.endsWith('.json'))
            .map(file => fs.readFile(path.join(nodesPath, file), 'utf-8'));
        
        const nodeContents = await Promise.all(nodePromises);
        const nodes = nodeContents.map(content => JSON.parse(content));
        return nodes;
    } catch (error: any) {
        if (error.code === 'ENOENT') { // Directory doesn't exist yet
            return [];
        }
        console.error("Error getting all nodes:", error);
        return { error: "Failed to get nodes." };
    }
}

async function handleGetHistoryProof(args: { nodeId: string; timestamp: number }) {
    // ... (existing function)
}

async function handleWikifyAndTag(args: { filePath: string }) {
    const { filePath } = args;
    if (!filePath) {
        return { error: 'filePath is required for WikifyAndTag.' };
    }

    const fullFilePath = path.join(vaultPath, filePath);
    const referenceFilePath = path.join(vaultPath, 'vault-context', '@TETRAHEDRAL_BRAIN_REFERENCE.md');

    try {
        let content = await fs.readFile(fullFilePath, 'utf-8');
        const nlp = winkNLP(model);
        const doc = nlp.readDoc(content);

        const entities = doc.entities().out();
        const nouns = doc.tokens().out(nlp.its.normal, nlp.as.array).filter((t: string) => {
            const token = nlp.readDoc(t).tokens().itemAt(0);
            return token.out(nlp.its.pos) === 'NN' || token.out(nlp.its.pos) === 'NNP';
        });

        const wordnet = new WordNet();
        const newLinks: string[] = [];

        for (const entity of entities) {
            // Simple check: if an entity name matches an existing note, wikify it.
            // More advanced: check for aliases, fuzzy matching, etc.
            const entityName = entity[0];
            const entityNotePath = path.join(vaultPath, 'notes', `${entityName}.md`);
            try {
                await fs.access(entityNotePath); // Check if a note with this name exists
                if (!content.includes(`[[${entityName}]]`)) {
                    content = content.replace(new RegExp(`\b${entityName}\b`, 'g'), `[[${entityName}]]`);
                    newLinks.push(`[[${entityName}]]`);
                }
            } catch (e) { /* Note does not exist, don't link */ }
        }

        for (const noun of nouns) {
            const nounNotePath = path.join(vaultPath, 'notes', `${noun}.md`);
            try {
                await fs.access(nounNotePath);
                if (!content.includes(`[[${noun}]]`)) {
                    content = content.replace(new RegExp(`\b${noun}\b`, 'g'), `[[${noun}]]`);
                    newLinks.push(`[[${noun}]]`);
                }
            } catch (e) { /* Note does not exist, don't link */ }

            // WordNet lookup for semantic connections
            const definitions = await new Promise<any[]>((resolve) => wordnet.lookup(noun, resolve));
            if (definitions && definitions.length > 0) {
                const synset = definitions[0].synsetOffset;
                const relatedTerms = await new Promise<any[]>((resolve) => wordnet.get(synset, resolve));
                if (relatedTerms && relatedTerms.length > 0) {
                    const related = relatedTerms[0].ptr.map((p: any) => p.word).filter((w: string) => w !== noun);
                    if (related.length > 0) {
                        newLinks.push(`[[${noun}]] related to: ${related.map((r: string) => `[[${r}]]`).join(', ')}`);
                    }
                }
            }
        }

        await fs.writeFile(fullFilePath, content); // Write back the modified content

        // Update the @TETRAHEDRAL_BRAIN_REFERENCE.md
        let referenceContent = '';
        try {
            referenceContent = await fs.readFile(referenceFilePath, 'utf-8');
        } catch (e) { /* File doesn't exist, create it */ }

        if (newLinks.length > 0) {
            const newEntry = `\n## Wikification Report for ${filePath} (${new Date().toLocaleString()})\n- ${newLinks.join('\n- ')}\n`;
            await fs.writeFile(referenceFilePath, referenceContent + newEntry);
        }

        return { status: 'success', message: `Wikified and tagged ${filePath}.` };

    } catch (error) {
        console.error(`Error in WikifyAndTag for ${filePath}:`, error);
        return { error: `Failed to wikify and tag ${filePath}.` };
    }
}

console.log(`✅ Agent Runtime is running for vault: ${vaultPath}`);
// ... (other logs)

wss.on('connection', ws => {
    console.log('Plugin connected to Agent Runtime.');
    ws.on('message', (message) => {
        try {
            const command = JSON.parse(message.toString()) as IToolCommand;
            console.log(`Received command from plugin: ${command.commandName}`);
            handleCommand(command, ws);
        } catch (e) {
            console.error("Invalid command from plugin", e);
        }
    });
});

// --- File Watcher ---
fs.mkdir(notesPath, { recursive: true }).then(() => {
    const watcher = chokidar.watch(path.join(notesPath, '**/*.md'), {
        persistent: true,
        ignoreInitial: false,
    });

    console.log(`Watching for file changes in: ${notesPath}`);
    const dispatchProcessFile = (filePath: string) => {
        const command: IToolCommand = {
            id: `chokidar-${Date.now()}`,
            commandName: 'ProcessFile',
            arguments: { filePath },
            timestamp: Date.now(),
        };
        // Dispatch command internally without needing a WebSocket client
        handleCommand(command);
    };

    watcher
        .on('add', dispatchProcessFile)
        .on('change', dispatchProcessFile)
        .on('error', error => console.error(`Watcher error: ${error}`));
});
