function cleanUp(arr) {
  var newArray = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

cleanUp([7, "ate", "", false, 9]);
