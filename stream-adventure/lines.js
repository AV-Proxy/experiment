var through = require('through2');
var split = require('split');
var number = 0;
var stream = through(function (line, encoding, next) {
  this.push(number % 2 === 0
    ? `${line.toString().toLowerCase()}\n`
    : `${line.toString().toUpperCase()}\n`
  );
  number++;
  next();
});

process.stdin.pipe(split('')).pipe(stream).pipe(process.stdout);
