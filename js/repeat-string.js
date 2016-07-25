function repeatString(str, num) {
  var array = [];
  
  for (var i = 0; i < num; i++) {
    array.push(str);
  }
  
  var myVar = array.join('');
  
  return myVar;
}

repeatString("abc", 3);

