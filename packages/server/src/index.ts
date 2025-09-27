import { createOpencodeServer } from "@opencode-ai/sdk"
import type { Session, Message, Part } from "@opencode-ai/sdk"
import { createOpencodeClient } from "@opencode-ai/sdk"
import { WebSocketServer, WebSocket } from 'ws';
import dotenv from 'dotenv';
import * as defaultConfig from './opencode.config.json' assert { type: "json" };
dotenv.config();  // Load environment variables from .env file

(async () => {
    const server = await createOpencodeServer({
        hostname: process.env.OPENCODE_OBSIDIAN_SERVER_SDK_HOST ? process.env.OPENCODE_OBSIDIAN_SERVER_SDK_HOST : "127.0.0.1",
        port: process.env.OPENCODE_OBSIDIAN_SERVER_SDK_PORT ? parseInt(process.env.OPENCODE_OBSIDIAN_SERVER_SDK_PORT) : 4096,
        config: defaultConfig as Record<string, any> || {
            $schema: "https://opencode.ai/schema/config.json",
            theme: "dark",
            command: {
                greet: {
                    template: "echo Hello, {{name}}!",
                    description: "Greets a user",
                    agent: "general",
                    model: "openai/gpt-4",
                    subtask: false,
                },
            },
            watcher: {
                ignore: [
                    "node_modules",
                    ".git",
                    ".obsidian",
                    ".vscode",
                    "dist",
                    "out",
                    "build",
                    "*.log",
                    "*.lock",
                    "*.sqlite",
                    "*.db",
                    "*.env",
                    "thumbs.db",
                    ".DS_Store"
                ],
            },
            model: "deepseek-r1:8b",
            small_model: "gemma3:270m",
            provider: {
                "ollama": {
                    "npm": "@ai-sdk/openai-compatible",
                    "name": "Ollama (local)",
                    "options": {
                        "baseURL": "http://localhost:11434/v1"
                    },
                    "models": {
                        "deepseek-r1:8b": {
                            "name": "DeepSeek R1 8B"
                        },
                        "gemma3:270m": {
                            "name": "Gemma 3 270M"
                        }
                    }
                }
            },
            mcp: {
                "claude": {
                    "command": "claude",
                    "args": ["mcp", "serve"],
                    "environment": {},
                    "enabled": true
                },
                "ollama": {
                    "type": "stdio",
                    "command": "npx",
                    "args": ["-y", "ollama-mcp-server@latest"],
                    "environment": {
                        "OLLAMA_BASE_URL": "http://localhost:11434"
                    },
                    "enabled": true
                }
            }
        }
    })

    console.log(`Server running at ${server.url}`)

    const wss = new WebSocketServer({ port: process.env.OPENCODE_OBSIDIAN_SERVER_WSS_PORT ? parseInt(process.env.OPENCODE_OBSIDIAN_SERVER_WSS_PORT) : 8080 });

    console.log(`✅ Global Relay Server started on ws://localhost:${wss.options.port}`);

    wss.on('connection', async (ws, req) => {
        const clientId = req.headers['sec-websocket-key'];
        const client = createOpencodeClient({
            baseUrl: "http://localhost:4096",
            responseStyle: "data",
        });
        await client.app.log({
            body: {
                service: clientId,
                level: "info",
                message: "Client connected to relay server",
            },
        })
        console.log(`[Relay] Client ${clientId} connected.`);
        ws.send(JSON.stringify({ type: 'list-projects', message: await client.project.list() }));
        ws.send(JSON.stringify({ type: 'current-project', message: await client.project.current() }));
        ws.send(JSON.stringify({ type: 'path-info', message: await client.path.get() }));
        ws.send(JSON.stringify({ type: 'config', message: await client.config.providers() }));

        try {
            console.log(`[Relay] Received message from ${clientId}. Broadcasting...`);
            // Broadcast the message to all other clients
            wss.clients.forEach(async ws => {
                if (ws !== ws && ws.readyState === WebSocket.OPEN) {
                    ws.send(await client.session.get({ path: { id: "invalid-id" } }));
                }
            });
        } catch (error) {
            console.error("Failed to get session:", (error as Error).message)
        }
        ws.on('message', (message) => {
            console.log(`[Relay] Received message from ${clientId}. Broadcasting...`);
            // Broadcast the message to all other clients
            try {
                const parsedMessage = JSON.parse(message.toString());
                const { type, value } = parsedMessage;
                switch (type) {
                    case 'some-type':
                        // Handle the specific type of message
                        break;

                    default:
                        break;
                }
            } catch (error) {
                wss.clients.forEach(client => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(message);
                    }
                });
            }
        });

        ws.on('close', () => {
            console.log(`[Relay] Client ${clientId} disconnected.`);
        });
    });
    process.on('SIGINT', async () => {
        console.log("Shutting down server...");

        server.close();
        wss.close(() => {
            console.log('WebSocket server closed.');
            process.exit(0);
        });
    });

    // Handle unexpected errors
    process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
    });

    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
})();