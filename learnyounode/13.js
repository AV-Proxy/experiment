var http = require('http');
var url = require('url');

function parseTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }
}

function unixTime(date) {
  return { unixtime: date.getTime() }
}

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json'});
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);
  
  if (parsedUrl.pathname === '/api/parsetime') {
    res.write(JSON.stringify(parseTime(date)));
  } else if (parsedUrl.pathname === '/api/unixtime') {
    res.write(JSON.stringify(unixTime(date)));
  } 
  
  res.end();
});

server.listen(process.argv[2]);
