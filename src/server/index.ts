import { WebSocketServer, WebSocket } from 'ws';
import { Trie } from 'merkle-patricia-tree';
import { NodeUpdateMessage } from '../core/types';

// In-memory state management
interface NodeHistory {
    latestUpdate: NodeUpdateMessage;
    historyTrie: Trie;
}

const nodeStates: Map<string, NodeHistory> = new Map();
const peers: Map<string, WebSocket> = new Map();

const wss = new WebSocketServer({ port: 8080 });

console.log('Opencode WebSocket server started on port 8080');

wss.on('connection', ws => {
    let peerId: string | null = null;
    console.log('Client connected');

    ws.on('message', async (message) => {
        try {
            const data = JSON.parse(message.toString());
            const { type, payload } = data;

            switch (type) {
                case '/peer/connect':
                    peerId = handlePeerConnect(ws, payload);
                    break;
                case '/peer/message':
                    await handlePeerMessage(payload, peerId);
                    break;
                case '/graph/state':
                    await handleGraphState(ws);
                    break;
                case '/graph/request_proof':
                    await handleRequestProof(ws, payload);
                    break;
                default:
                    ws.send(JSON.stringify({ error: 'Unknown message type' }));
            }
        } catch (error) {
            ws.send(JSON.stringify({ error: 'Invalid message format' }));
            console.error('Error processing message:', error);
        }
    });

    ws.on('close', () => {
        console.log(`Client ${peerId || ''} disconnected`);
        if (peerId) {
            peers.delete(peerId);
            broadcast({ type: '/peer/disconnected', payload: { peerId } });
        }
    });
});

function handlePeerConnect(ws: WebSocket, payload: { walletAddress: string; peerId: string }): string | null {
    const { walletAddress, peerId } = payload;
    if (!walletAddress || !peerId) {
        ws.send(JSON.stringify({ error: 'walletAddress and peerId are required' }));
        return null;
    }

    peers.set(peerId, ws);
    console.log(`Peer connected: ${peerId} with wallet ${walletAddress}`);
    ws.send(JSON.stringify({ type: '/peer/connected', payload: { success: true } }));
    broadcast({ type: '/peer/new', payload: { peerId, walletAddress } }, peerId);
    return peerId;
}

async function handlePeerMessage(payload: NodeUpdateMessage, senderPeerId: string | null) {
    if (payload.type !== 'node_update' || !payload.nodeId || !payload.timestamp) {
        console.warn('Received invalid or unhandled message type:', payload);
        return;
    }

    const { nodeId, timestamp } = payload;
    const existingNode = nodeStates.get(nodeId);

    if (existingNode && existingNode.latestUpdate.timestamp >= timestamp) {
        console.log(`Rejected stale update for ${nodeId}.`);
        return;
    }

    console.log(`Accepted update for ${nodeId} from ${senderPeerId}`);

    let nodeHistory: NodeHistory;
    if (existingNode) {
        nodeHistory = existingNode;
    } else {
        nodeHistory = { latestUpdate: payload, historyTrie: new Trie() };
    }

    nodeHistory.latestUpdate = payload;
    // Use Buffers for keys and values as required by merkle-patricia-tree
    await nodeHistory.historyTrie.put(Buffer.from(String(timestamp)), Buffer.from(JSON.stringify(payload)));
    nodeStates.set(nodeId, nodeHistory);

    broadcast({ type: '/peer/message', payload }, senderPeerId);
}

async function handleGraphState(ws: WebSocket) {
    const graphState: { [key: string]: any } = {};
    for (const [nodeId, nodeHistory] of nodeStates.entries()) {
        graphState[nodeId] = {
            latest: nodeHistory.latestUpdate,
            historyRoot: nodeHistory.historyTrie.root.toString('hex'), // The root hash of the history trie
        };
    }
    ws.send(JSON.stringify({ type: '/graph/state', payload: graphState }));
}

async function handleRequestProof(ws: WebSocket, payload: { nodeId: string; timestamp: number }) {
    const { nodeId, timestamp } = payload;
    const nodeHistory = nodeStates.get(nodeId);

    if (!nodeHistory) {
        ws.send(JSON.stringify({ type: '/graph/proof_response', error: 'Node not found' }));
        return;
    }

    try {
        const key = Buffer.from(String(timestamp));
        const proof = await nodeHistory.historyTrie.createProof(key);
        const value = await nodeHistory.historyTrie.get(key);

        ws.send(JSON.stringify({ 
            type: '/graph/proof_response', 
            payload: { 
                nodeId, 
                timestamp,
                root: nodeHistory.historyTrie.root.toString('hex'),
                proof: proof.map(p => p.toString('hex')), // Convert buffers to hex for JSON transport
                value: value?.toString(),
            }
        }));
    } catch (error) {
        console.error('Error creating proof:', error);
        ws.send(JSON.stringify({ type: '/graph/proof_response', error: 'Failed to create proof' }));
    }
}

function broadcast(message: any, excludePeerId?: string | null) {
    const serializedMessage = JSON.stringify(message);
    for (const [peerId, socket] of peers.entries()) {
        if (peerId !== excludePeerId) {
            socket.send(serializedMessage);
        }
    }
}
