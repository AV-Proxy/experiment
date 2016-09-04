// Exercise how to process a traditional (non-AJAX) web form
var express = require('express');
var server = express();
var bodyparser = require('body-parser'); // 'urlencoded' middleware from the 'body-parser' module

// extended: true (qs) || extended: false (querystring) -> determines the parser module
server.use(bodyparser.urlencoded({extended: false}));
server.post('/form', function(request, response) {
  response.end(request.body.str.split('').reverse().join(''));
});
server.listen(process.argv[2]);

// Connect middleware:
// [https://github.com/senchalabs/connect#middleware]

// body-parser module:
// [https://github.com/expressjs/body-parser]

// Videos: [http://bit.ly/1jW1sBf]
