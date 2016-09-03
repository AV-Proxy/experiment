const fs = require('fs');

fs.readFile(process.argv[2], (err, contents) => {
  if (err) { return console.error(err); }
  console.log(contents.toString().split('\n').length - 1);
});
