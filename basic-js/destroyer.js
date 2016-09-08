function destroyer(arr) {
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arguments[1] && arr[i] !== arguments[2] && arr[i] !== arguments[3]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([1, 2, 3, 1, 2, 3], 2, 3);