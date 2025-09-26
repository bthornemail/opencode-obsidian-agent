import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { NodeUpdateMessage } from './core/types';
import { IToolCommand } from './core/mcp-types';

export type MessageCallback = (message: any) => void;

export class OpencodeAgentClient {
    private ws: WebSocket | null = null;
    private messageListeners: MessageCallback[] = [];

    constructor() {}

    connect(serverUrl: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(serverUrl);

            this.ws.on('open', () => {
                console.log('[Client] Connected to Opencode DAI Server');
                resolve();
            });

            this.ws.on('error', (error) => {
                console.error('[Client] WebSocket error:', error);
                reject(error);
            });

            this.ws.on('message', (message) => {
                const parsedMessage = JSON.parse(message.toString());
                this.messageListeners.forEach(callback => callback(parsedMessage));
            });

            this.ws.on('close', () => {
                console.log('[Client] Disconnected from server');
            });
        });
    }

    disconnect() {
        this.ws?.close();
    }

    onMessage(callback: MessageCallback) {
        this.messageListeners.push(callback);
    }

    private sendCommand(command: IToolCommand) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('Not connected to the server.');
        }
        this.ws.send(JSON.stringify(command));
    }

    updateNote(update: NodeUpdateMessage): void {
        const command: IToolCommand = {
            id: uuidv4(),
            commandName: 'UpdateNote',
            arguments: { update },
            timestamp: Date.now(),
        };
        this.sendCommand(command);
    }

    createAgentVault(vaultName: string): void {
        const command: IToolCommand = {
            id: uuidv4(),
            commandName: 'CreateAgentVault',
            arguments: { vaultName },
            timestamp: Date.now(),
        };
        this.sendCommand(command);
    }

    executeShell(vaultName: string, commandToExecute: string): void {
        const command: IToolCommand = {
            id: uuidv4(),
            commandName: 'ExecuteShell',
            arguments: { vaultName, command: commandToExecute },
            timestamp: Date.now(),
        };
        this.sendCommand(command);
    }

    setVaultContext(vaultName: string, context: any): void {
        const command: IToolCommand = {
            id: uuidv4(),
            commandName: 'SetVaultContext',
            arguments: { vaultName, context },
            timestamp: Date.now(),
        };
        this.sendCommand(command);
    }

    enrichContext(vaultName: string): void {
        const command: IToolCommand = {
            id: uuidv4(),
            commandName: 'EnrichContext',
            arguments: { vaultName },
            timestamp: Date.now(),
        };
        this.sendCommand(command);
    }

    commitState(vaultName: string, agentId: string): void {
        const command: IToolCommand = {
            id: uuidv4(),
            commandName: 'CommitState',
            arguments: { vaultName, agentId },
            timestamp: Date.now(),
        };
        this.sendCommand(command);
    }
}
