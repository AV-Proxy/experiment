function myReplace(str, before, after) {
  var array = [];
  
  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substr(1);
  } else {
    after = after;
  }
      
  array = str.split(" ");
  
  for (var i = 0; i < str.length; i++) {
    if (array[i] === before) {
      array.splice(i, 1, after);
    }
  }
  
  array = array.join(" ");
  
  return array;
}

myReplace("Let us go to the store", "store", "mall");