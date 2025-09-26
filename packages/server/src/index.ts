import { WebSocketServer, WebSocket } from 'ws';
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 
const wss = new WebSocketServer({ port: process.env.OPENCODE_OBSIDIAN_SERVER_WSS_PORT ? parseInt(process.env.OPENCODE_OBSIDIAN_SERVER_WSS_PORT) : 8080 });

console.log(`✅ Global Relay Server started on ws://localhost:${wss.options.port}`);

wss.on('connection', (ws, req) => {
    const clientId = req.headers['sec-websocket-key'];
    console.log(`[Relay] Client ${clientId} connected.`);

    ws.on('message', (message) => {
        console.log(`[Relay] Received message from ${clientId}. Broadcasting...`);
        // Broadcast the message to all other clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log(`[Relay] Client ${clientId} disconnected.`);
    });
});