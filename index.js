import express from 'express';
//import { Server } from 'socket.io';

const expressApp = express(); //Environment setup
const PORT = 5050;

expressApp.use(express.json()) //Middlewares
expressApp.use('/app', express.static('public')); //Middlewares

expressApp.listen(PORT);
/*const httpServer = expressApp.listen(PORT, () => { //Star the server
    console.log(`http://localhost:${PORT}/app`);
})*/

//const io = new Server(httpServer, { path: '/real-time' }); //WebSocket Server (instance) initialization

//io.on('connection', (socket) => { //Listening for webSocket connections
    
//});