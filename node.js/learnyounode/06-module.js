var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {  
  fs.readdir(dir, (err, data) => {
    if (err) { return callback(err); }

    data = data.filter(value => { 
      return path.extname(value) === `.${ext}`;
    });
    
    return callback(null, data);
  });
}