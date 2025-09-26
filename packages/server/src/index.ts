import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

console.log('✅ Global Relay Server started on ws://localhost:8080');

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