import { Note, Scale } from './Lang';

let http = require('http');
let fs = require('fs');

// fs.readFile('./index.html', function(err, html) {
//     if (err) {
//         throw err;
//     }

//     let server = http.createServer(function(req, res) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(html);
//         res.end();
//     });

//     server.listen(8080, '127.0.0.1');

// });

const express = require('express');
const app = new express();

app.get('/', function(request, response) {
    response.sendfile('index.html');
});

app.listen(8080);