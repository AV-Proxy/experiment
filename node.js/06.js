const myModule = require('./06-module.js');

myModule(process.argv[2], process.argv[3], (err, data) => {
  if (err) { return console.error(err) };
  console.log(data.join('\n'));
});
