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
    const { nodeId, timestamp } = args;
    const nodeHistory = nodeStates.get(nodeId);

    if (!nodeHistory) {
        return { error: 'Node not found' };
    }

    try {
        const key = Buffer.from(String(timestamp));
        const proof = await nodeHistory.historyTrie.createProof(key);
        const value = await nodeHistory.historyTrie.get(key);

        return { 
            nodeId, 
            timestamp,
            root: nodeHistory.historyTrie.root.toString('hex'),
            proof: proof.map(p => p.toString('hex')),
            value: value?.toString(),
        };
    } catch (error) {
        console.error('Error creating proof:', error);
        return { error: 'Failed to create proof' };
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
