import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { IToolCommand, TetraNode } from '@opencode-v5/core';

export type MessageCallback = (message: any) => void;

export class OpencodeAgentClient {
    private ws: WebSocket | null = null;
    private messageListeners: MessageCallback[] = [];
    private pendingRequests: Map<string, (response: any) => void> = new Map();

    constructor() {}

    connect(serverUrl: string): Promise<void> {
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
                const parsedMessage = JSON.parse(message.toString());

                // Check if this is a response to a pending request
                if (parsedMessage.type === 'MCP_RESPONSE' && this.pendingRequests.has(parsedMessage.requestId)) {
                    const resolveFunc = this.pendingRequests.get(parsedMessage.requestId);
                    if (resolveFunc) {
                        resolveFunc(parsedMessage.payload);
                        this.pendingRequests.delete(parsedMessage.requestId);
                    }
                } else {
                    // Otherwise, treat as a broadcast message
                    this.messageListeners.forEach(callback => callback(parsedMessage));
                }
            });

            this.ws.on('close', () => {
                console.log('[Client] Disconnected from server');
            });
        });
    }

    // ... (disconnect, onMessage)

    public sendCommand(command: IToolCommand) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('Not connected to the server.');
        }
        this.ws.send(JSON.stringify(command));
    }

    getAllNodes(): Promise<TetraNode[]> {
        return new Promise((resolve) => {
            const command: IToolCommand = {
                id: uuidv4(),
                commandName: 'GetAllNodes',
                arguments: {},
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }

    publishNode(nodeId: string): Promise<any> {
        return new Promise((resolve) => {
            const command: IToolCommand = {
                id: uuidv4(),
                commandName: 'PublishNode',
                arguments: { nodeId },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }

    getHistoryProof(nodeId: string, timestamp: number): Promise<any> {
        return new Promise((resolve) => {
            const command: IToolCommand = {
                id: uuidv4(),
                commandName: 'GetHistoryProof',
                arguments: { nodeId, timestamp },
                timestamp: Date.now(),
            };
            this.pendingRequests.set(command.id, resolve);
            this.sendCommand(command);
        });
    }
}
