const http = require('http');

var results = [];
var count = 0;
var temp = '';

function printResults() {
  results.map(element => { console.log(element); });
}

function httpGet(index) {
  http.get(process.argv[2 + index], response => {
    response.on('data', data => { temp += `${data}`; });
    response.on('end', () => {
      results[index] = temp;
      temp = '';
      count++;
      
      if (count === 3) {
        printResults();      
      }
    });
  });
};

for (var i = 0; i < 3; i++) { httpGet(i); }
