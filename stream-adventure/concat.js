var concat = require('concat-stream');
var stream = concat(function (data) {
  var temp = data.toString().split('').reverse().join('');
  console.log(temp);
});

process.stdin.pipe(stream);
