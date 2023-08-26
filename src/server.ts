import express from 'express';
import { Server as WebSocketServer } from 'ws'; // Using 'Server' from 'ws' package.
import { createServer } from 'http';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const PORT = process.env.EXPRESS_PORT || 5050;

// Initialize application
const app = express();
const server = createServer(app);

// WebSocket Server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('A new client Connected');
    
    ws.on('message', (message) => {
        console.log('Received: %s', message);
    });

    ws.send('Welcome! You are connected...');
});

// Express Server

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});
