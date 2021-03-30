const port = 8080;
const io = require('socket.io')(port, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
io.sockets.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('offer', (message) => {
        socket.broadcast.emit('offer', message)
    })
    socket.on('answer', (message) => {
        socket.broadcast.emit('answer', message)
        console.log('answer')
    })
    socket.on('ice', (message) => {
        console.log('ice')
        socket.broadcast.emit('ice', message)
    })

})