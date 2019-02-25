var express = require("express")
var app = new express()
var http = require("http").Server(app)
var io = require("socket.io")(http)

var log =require('log'),
    log = new log('debug')

var port = process.env.PORT || 1500;

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res){
    res.redirect('Menu.html')
});

app.get('/videocamara.html', function (req, res){
    res.redirect('videocamara.html')
});
io.on('connection', function (socket) {
    socket.on('stream', function (image) {
        socket.broadcast.emit('stream', image)
    })
    
})


http.listen(port, function () {
    
  console.log("servidor escuchando a travez del puerto %s", port);
});