const fs = require('fs');

fs.readdir(process.argv[2], (err, data) => {
  if (err) { return console.error(err); }

  var filtered = data.filter(value => { 
    return value.indexOf(`.${process.argv[3]}`) !== -1; 
  });

  console.log(filtered.join('\n'));
});
