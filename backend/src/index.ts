import http from "http";

import {Socket} from "socket.io"

const express = require("express");
const { Server } = require('socket.io');


const app=express();
const server=http.createServer(app);

const io = new Server(server);

io.on('connection', (socket:Socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});