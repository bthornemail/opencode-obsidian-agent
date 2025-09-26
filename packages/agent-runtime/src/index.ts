import { WebSocketServer, WebSocket } from 'ws';
import chokidar from 'chokidar';
import { promises as fs } from 'fs';
import * as path from 'path';
import { Trie } from 'merkle-patricia-tree';
import { createHelia } from 'helia';
import { IToolCommand, NodeUpdateMessage, TetraNode } from '@opencode-v5/core';

// ... (Argument Parsing & Paths)

// --- In-memory State ---
interface NodeHistory {
    latest: TetraNode;
    historyTrie: Trie;
}
const nodeStates: Map<string, NodeHistory> = new Map();

// --- Helia IPFS Node ---
let helia: any; // Helia node instance

async function startHelia() {
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
        const cidInstance = CID.parse(cid);
        await helia.pins.add(cidInstance);
        console.log(`✅ Successfully pinned CID ${cid} for vault ${vaultName} to IPFS.`);
        return { status: 'success', message: `Pinned ${cid} to IPFS.` };
    } catch (error) {
        console.error(`Error pinning CID ${cid} for vault ${vaultName} to IPFS:`, error);
        return { error: `Failed to pin CID ${cid} to IPFS.` };
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
