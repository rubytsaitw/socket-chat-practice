const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = 3000
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });

// io.on('connection', (socket) => {
//   socket.broadcast.emit('hi');
// });

io.on('connection', (socket) => {
  // listen to send-message from client
  socket.on('send-message', (message, room) => {
    console.log('receive send-message')
    if (room === '') {
      console.log('rooom is empty')
      socket.broadcast.emit('receive-message', message)
    } else {
      socket.to(room).emit('receive-message', message)
    }
    // A. send message to client (all sockets)
    // io.emit('receive-message', message)
    // B. Send message to all other clinets
    // (from this socket, broadcast to all other sockets)
    // socket.broadcast.emit('receive-message', message)
  })
  socket.on('join-room', (room, cb) => {
    socket.join(room)
    cb(`Joined ${room}`)
  })
})

server.listen(3000, () => {
  console.log(`listening on *: ${PORT}`);
});