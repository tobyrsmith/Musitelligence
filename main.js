const express = require('express');
const app = new express();

app.use(express.static('/home/seanitzel/Documents/Programming/Web/MusicProj'));

app.get('/', function(request, response) {
    response.sendfile('index.html');
});

app.listen(8080);