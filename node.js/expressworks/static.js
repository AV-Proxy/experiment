// Exercise about serving static assets (eg. HTML files)
var express = require('express');
var server = express();

server.use(express.static(process.argv[3]));
server.listen(process.argv[2]);

// Videos: [http://bit.ly/1jW1sBf]
