// Exercise using Stylus CSS middleware to generate static HTML
var express = require('express');
var server = express();

// use stylus middleware to process CSS file located in process.argv[3] folder
server.use(require('stylus').middleware(process.argv[3]));

// use express to populate static HTML file located in process.argv[3] folder
server.use(express.static(process.argv[3]));
server.listen(process.argv[2]);


// Videos: [http://bit.ly/1jW1sBf]
