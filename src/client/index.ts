import { createOpencodeClient, OpencodeClient } from '@opencode-ai/sdk';
import WebSocket from 'ws';
import { NodeUpdateMessage } from '../core/types';

export type MessageCallback = (message: any) => void;

export class OpencodeAgentClient {
    private opencode: OpencodeClient;
    private ws: WebSocket | null = null;
    private messageListeners: MessageCallback[] = [];

    constructor(opencodeBaseUrl: string = 'http://localhost:4096') {
        this.opencode = createOpencodeClient({ baseUrl: opencodeBaseUrl });
    }

    connect(serverUrl: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(serverUrl);

            this.ws.on('open', () => {
                console.log('Connected to Opencode Agent Server');
                resolve();
            });

            this.ws.on('error', (error) => {
                console.error('WebSocket error:', error);
                reject(error);
            });

            this.ws.on('message', (message) => {
                const parsedMessage = JSON.parse(message.toString());
                // Notify all registered listeners
                this.messageListeners.forEach(callback => callback(parsedMessage));
            });
        });
    }

    disconnect() {
        this.ws?.close();
        console.log('Disconnected from server');
    }

    // Add a listener for incoming messages
    onMessage(callback: MessageCallback) {
        this.messageListeners.push(callback);
    }

    private sendMessage(type: string, payload: any) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('Not connected to the server.');
        }
        this.ws.send(JSON.stringify({ type, payload }));
    }

    connectPeer(walletAddress: string, peerId: string): void {
        this.sendMessage('/peer/connect', { walletAddress, peerId });
    }

    publishNodeUpdate(update: NodeUpdateMessage): void {
        this.sendMessage('/peer/message', update);
    }

    requestProof(nodeId: string, timestamp: number): void {
        this.sendMessage('/graph/request_proof', { nodeId, timestamp });
    }

    getGraphState(): Promise<{ adjacency: object; log: object }> {
        return new Promise((resolve) => {
            this.sendMessage('/graph/state', {});

            const listener = (message: any) => {
                if (message.type === '/graph/state') {
                    // Temporarily remove the listener to avoid handling the same message multiple times
                    const index = this.messageListeners.indexOf(listener);
                    if (index > -1) {
                        this.messageListeners.splice(index, 1);
                    }
                    resolve(message.payload);
                }
            };
            this.onMessage(listener);
        });
    }
}
