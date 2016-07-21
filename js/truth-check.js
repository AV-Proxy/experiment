function truthCheck(collection, pre) {
  var omg;  
  
  for (var i = 0; i < collection.length; i++) {
    if ((collection[i].hasOwnProperty(pre)) && (Boolean(collection[i][pre]))) {
      omg = true;
    } else {
      omg = false;
      break;
    }
  }
  
  return omg;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0},
            {"user": "Dipsy", "sex": "male", "age": 3}, 
            {"user": "Laa-Laa", "sex": "female", "age": 5}, 
            {"user": "Po", "sex": "female", "age": 4}], "age");