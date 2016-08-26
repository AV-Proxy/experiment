const http = require('http');
var temp = '';

http.get(process.argv[2], response => {
  response.on('data', data => { temp += `${data}`; });
  response.on('end', () => {
    console.log(temp.length);
    console.log(temp);
  });
});
