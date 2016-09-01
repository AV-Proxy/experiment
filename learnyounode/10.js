var net = require('net');

function date() {
  function format(x) { return (x < 10 ? '0' : '') + x }

  var today = new Date();
  var year = today.getFullYear();
  var month = format(today.getMonth() + 1);
  var day = format(today.getDate());
  var hour = format(today.getHours());
  var min = format(today.getMinutes());

  return `${year}-${month}-${day} ${hour}:${min}\n`;
}

var server = net.createServer(function(socket) { socket.end(date()); });
server.listen(process.argv[2]);
