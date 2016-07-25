
function missingLetter(str) {
  var array = [];
  var missing = [];
  
  for (var i = 0; i < str.length; i++) {
    array.push(str.charCodeAt(i)); 
  }
  
  for (var j = 0; j < array.length; j++) {
    if ((array[j+1] - array[j]) !== 1) {
      missing.push(array[j]+1);
    }
  }
  
  missing.pop();
  
  if (missing.length !== 0) {
    missing = String.fromCharCode(missing);
  } else {
    missing = undefined;
  }
  
  return missing;
}

missingLetter("bcdf");
