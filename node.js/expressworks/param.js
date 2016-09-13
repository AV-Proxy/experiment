// Exercise using URL parameters
// eg. '/message/526aa677a8ceb64569c9d4fb' -> extract the value for message ID
var express = require('express');
var server = express();

// mounted to path '/messages/id' by prepending ':' to the beginning of variable name
server.put('/message/:id', function(request, response) {
  var id = request.params.id; // The given variable is then stored in 'request.params'
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');
  response.send(str);
})

server.listen(process.argv[2]);



// Different way to solve (can use 'req.param' middleware to parse the URL parameter)
// ----------------------------------------------------------------------------------
// server.param('id', function(request, ressponse, next, id) {
//   request.id = id;
//   ...
//   next();
// });

// server.get('/message/:id', function(request, response, next) {
//   console.log(request.id);
//   next();
// });
