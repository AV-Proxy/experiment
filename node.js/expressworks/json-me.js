// Exercise writing a server that reads a file, parses it to JSON,
// and responds with that content to the user
var express = require('express');
var fs = require('fs');
var server = express();

server.get('/books', function(request, response) {
  fs.readFile(process.argv[3], function(error, data) {
    if (error) { console.error(error); }
    response.json(JSON.parse(data));
  });
});

server.listen(process.argv[2]);
