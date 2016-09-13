// Exercise using engine templates (eg. JADE)
var express = require('express');
var server = express();

server.set('view engine', 'jade');
server.set('views', process.argv[3]);
server.get('/home', function(request, response) {
  response.render('index', {date: new Date().toDateString()});
});

server.listen(process.argv[2]);
