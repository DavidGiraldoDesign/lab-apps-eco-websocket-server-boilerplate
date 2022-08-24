const express = require('express');
const { Server } = require('socket.io');

const expressApp = express(); //Environment setup

expressApp.use(express.json()) //Middlewares
expressApp.use('/app', express.static('public')); //Middlewares

const httpServer = expressApp.listen(5050, () => { //Star the server
    console.log(`http://localhost:5050/app`);
})

const io = new Server(httpServer, { path: '/real-time' }); //WebSocket Server (instance) initialization

io.on('connection', (socket) => { //Listening for webSocket connections
    
});