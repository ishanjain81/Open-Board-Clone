const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static("public"));

let port = 5000;
let server = app.listen(port,()=>{
    console.log("Listening to port " + port);
});

let io = socket(server);

io.on("connection",(socket)=>{
    console.log("Made socket Connection");

    // Recieved Data
    socket.on("beginPath",(data)=>{
        // Now Transfer data to all Connected computers
        io.sockets.emit("beginPath",data);
    });

    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    });

    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    });
});