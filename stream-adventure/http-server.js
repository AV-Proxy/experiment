var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res) {
  req.pipe(through(function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
  })).pipe(res);
});

server.listen(process.argv[2]);
