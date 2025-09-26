import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';
export class OpencodeAgentClient {
    ws = null;
    messageListeners = [];
    pendingRequests = new Map();
    constructor() { }
    connect(serverUrl) {
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(serverUrl);
            this.ws.on('open', () => {
                console.log('[Client] Connected to Agent Runtime');
                resolve();
            });
            this.ws.on('error', (error) => {
                console.error('[Client] WebSocket error:', error);
                reject(error);
            });
            this.ws.on('message', (message) => {
                const parsedMessage = JSON.parse(message.data.toString());
                // Check if this is a response to a pending request
                if (parsedMessage.type === 'MCP_RESPONSE' && this.pendingRequests.has(parsedMessage.requestId)) {
                    const resolveFunc = this.pendingRequests.get(parsedMessage.requestId);
                    if (resolveFunc) {
                        resolveFunc(parsedMessage.payload);
                        this.pendingRequests.delete(parsedMessage.requestId);
                    }
                }
                else {
                    // Otherwise, treat as a broadcast message
                    this.messageListeners.forEach(callback => callback(parsedMessage));
                }
            });
            this.ws.on('close', () => {
                console.log('[Client] Disconnected from server');
            });
        });
    }
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
    onMessage(callback) {
        this.messageListeners.push(callback);
    }
    createAgentVault(vaultName) {
        return new Promise((resolve) => {
            const command = {
                id: uuidv4(),
                commandName: 'CreateAgentVault',
                arguments: { vaultName },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
    executeShell(vaultName, command) {
        return new Promise((resolve) => {
            const cmd = {
                id: uuidv4(),
                commandName: 'ExecuteShell',
                arguments: { vaultName, command },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(cmd.id, resolve);
            this.sendCommand(cmd);
        });
    }
    commitState(vaultName, agentId) {
        return new Promise((resolve) => {
            const command = {
                id: uuidv4(),
                commandName: 'CommitState',
                arguments: { vaultName, agentId },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
    setVaultContext(vaultName, context) {
        return new Promise((resolve) => {
            const command = {
                id: uuidv4(),
                commandName: 'SetVaultContext',
                arguments: { vaultName, context },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
    sendCommand(command) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('Not connected to the server.');
        }
        this.ws.send(JSON.stringify(command));
    }
    getAllNodes() {
        return new Promise((resolve) => {
            const command = {
                id: uuidv4(),
                commandName: 'GetAllNodes',
                arguments: {},
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
    publishNode(nodeId) {
        return new Promise((resolve) => {
            const command = {
                id: uuidv4(),
                commandName: 'PublishNode',
                arguments: { nodeId },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
    getHistoryProof(nodeId, timestamp) {
        return new Promise((resolve) => {
            const command = {
                id: uuidv4(),
                commandName: 'GetHistoryProof',
                arguments: { nodeId, timestamp },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
    wikifyAndTag(filePath) {
        return new Promise((resolve) => {
            const command = {
                id: uuidv4(),
                commandName: 'WikifyAndTag',
                arguments: { filePath },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
}
