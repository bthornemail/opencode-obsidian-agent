import { WebSocketServer, WebSocket } from 'ws';
import chokidar from 'chokidar';
import { promises as fs } from 'fs';
import * as path from 'path';
import { BaseTrie as Trie } from 'merkle-patricia-tree';
// import { createHelia } from 'helia'; // Dynamically imported later
import { TetraNode} from '../../core/dist/TetraNode';
import { IToolCommand} from '../../core/dist/mcp-types';
import {CID} from 'multiformats';
// import * as json from 'multiformats/codecs/json'
// import { sha256 } from 'multiformats/hashes/sha2'
// import nodeDataChannel from 'node-datachannel';

// --- Argument Parsing & Paths ---
const args = process.argv.slice(2);
const vaultPath = args[0] || process.env.VAULT_PATH || path.join(process.cwd(), 'vaults', 'default');
const notesPath = path.join(vaultPath, 'notes');
const wsPort = parseInt(process.env.WS_PORT || '8080', 10);

const wss = new WebSocketServer({ port: wsPort });

console.log(`WebSocket server started on port ${wsPort}`);

// --- In-memory State ---
interface NodeHistory {
    latest: TetraNode;
    historyTrie: Trie;
}
const nodeStates: Map<string, NodeHistory> = new Map();

// --- Helia IPFS Node ---
let helia: any; // Helia node instance

let createHelia: any; // Dynamically import createHelia

async function startHelia() {
    // Dynamically import createHelia
    ({ createHelia } = await import('helia'));
    helia = await createHelia();
    console.log(`✅ Helia IPFS node started with Peer ID: ${helia.libp2p.peerId.toString()}`);
}

async function stopHelia() {
    if (helia) {
        await helia.stop();
        console.log('❌ Helia IPFS node stopped.');
    }
}

// Start Helia when runtime starts
startHelia();

// Stop Helia when runtime exits
process.on('SIGINT', stopHelia);
process.on('SIGTERM', stopHelia);
process.on('exit', stopHelia);

// ... (rest of file until handlePinStateToIPFS)

async function handlePinStateToIPFS(args: { vaultName: string; cid: string }) {
    const { vaultName, cid } = args;
    if (!cid) {
        return { error: 'CID is required for PinStateToIPFS.' };
    }

    if (!helia) {
        return { error: 'Helia IPFS node not started.' };
    }

    try {
        // Dynamically import CID
        const cidInstance = CID.parse(cid);
        await helia.pins.add(cidInstance);
        console.log(`✅ Successfully pinned CID ${cid} for vault ${vaultName} to IPFS.`);
        return { status: 'success', message: `Pinned ${cid} to IPFS.` };
    } catch (error) {
        console.error(`Error pinning CID ${cid} for vault ${vaultName} to IPFS:`, error);
        return { error: `Failed to pin CID ${cid} to IPFS.` };
    }
}

async function handleCommand(toolCommand: IToolCommand): Promise<any> {
    let responsePayload: any;

                switch (toolCommand.commandName) {
                    case 'GetAllNodes':
                        // For now, return a mock list of nodes
                        responsePayload = [
                            {
                                nodeId: 'mock-node-1',
                                staticCentroid: 'mock-static-centroid-1',
                                dynamicCentroid: 'mock-dynamic-centroid-1',
                                timestamp: Date.now(),
                            },
                            {
                                nodeId: 'mock-node-2',
                                staticCentroid: 'mock-static-centroid-2',
                                dynamicCentroid: 'mock-dynamic-centroid-2',
                                timestamp: Date.now(),
                            },
                        ];
                        break;
                    case 'CreateAgentVault':
                        const { vaultName: createVaultName } = toolCommand.arguments;
                        console.log(`Creating agent vault: ${createVaultName}`);
                        responsePayload = { success: true, vaultName: createVaultName };
                        break;
                    case 'ExecuteShell':
                        const { vaultName: execVaultName, command: shellCommand } = toolCommand.arguments;
                        console.log(`Executing shell command "${shellCommand}" in vault: ${execVaultName}`);
                        responsePayload = { vaultName: execVaultName, stdout: `Executed: ${shellCommand}`, stderr: '' };
                        break;
                    case 'CommitState':
                        const { vaultName: commitVaultName, agentId } = toolCommand.arguments;
                        console.log(`Committing state for vault: ${commitVaultName}, agent: ${agentId}`);
                        responsePayload = { success: true, vaultName: commitVaultName, agentId };
                        break;
                    case 'SetVaultContext':
                        const { vaultName: setContextVaultName, context } = toolCommand.arguments;
                        console.log(`Setting context for vault: ${setContextVaultName}`, context);
                        responsePayload = { success: true, vaultName: setContextVaultName };
                        break;
                    case 'PublishNode':
                        const { nodeId: publishNodeId } = toolCommand.arguments;
                        console.log(`Publishing node: ${publishNodeId}`);
                        responsePayload = { success: true, nodeId: publishNodeId };
                        break;
                    case 'GetHistoryProof':
                        const { nodeId: historyNodeId, timestamp: historyTimestamp } = toolCommand.arguments;
                        console.log(`Getting history proof for node: ${historyNodeId} at ${historyTimestamp}`);
                        responsePayload = { root: 'mockRoot', value: 'mockValue', proof: [] };
                        break;
                    case 'WikifyAndTag':
                        const { filePath: wikifyFilePath } = toolCommand.arguments;
                        console.log(`Wikifying and tagging file: ${wikifyFilePath}`);
                        responsePayload = { success: true, message: 'Mock wikification complete.' };
                        break;
                    case 'ProcessFile':
                        const { filePath: processFilePath } = toolCommand.arguments;
                        console.log(`Processing file: ${processFilePath}`);
                        responsePayload = { success: true, message: `File ${processFilePath} processed.` };
                        break;
                    default:
                        responsePayload = { error: `Unknown command: ${toolCommand.commandName}` };
                }    return { ...responsePayload, commandName: toolCommand.commandName };
}

console.log(`✅ Agent Runtime is running for vault: ${vaultPath}`);
// ... (other logs)

wss.on('connection', ws => {
    console.log('Plugin connected to Agent Runtime.');
    ws.on('message', async message => {
        try {
            const toolCommand: IToolCommand = JSON.parse(message.toString());
            console.log('Received IToolCommand:', toolCommand);

            const responsePayload = await handleCommand(toolCommand);

            ws.send(JSON.stringify({
                type: 'MCP_RESPONSE',
                requestId: toolCommand.id,
                payload: responsePayload,
            }));

        } catch (error: any) {
            console.error('Error processing message:', error);
            ws.send(JSON.stringify({
                type: 'MCP_ERROR',
                error: error.message,
            }));
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
