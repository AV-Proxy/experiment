// Exercise processing data from URL query string (urlencoded)
var express = require('express');
var server = express();

server.get('/search', function(request, response) {
  response.send(request.query); // query middleware is a part of Express.js
});

server.listen(process.argv[2]);


// Videos: [http://bit.ly/1jW1sBf]
