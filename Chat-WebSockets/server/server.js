const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io"); 

const app = express();
const httpServer = createServer(app);
const options ={cors: { origin: '*', methods:["GET", "POST"] }}
const io = new Server(httpServer, options);

io.on("connection", (socket) => {
  socket.on("newUser", (arg) => {
    console.log(`El usuario ${arg} se ha conectado`);
    io.emit("messageEmmited", {
      message: `${arg} is connected!!!`
    })
  })
  socket.on("newMessage", (message) => {
    io.emit("messageEmmited", {
      message: message
    })
  })
})

httpServer.listen(3001, () => console.log('Server linstening...'));