function getIndexToIns(arr, num) {
  var test = 0;
  arr = arr.sort();

  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      test ++;
    }
  }
  return test;
}

getIndexToIns([40, 70, 60], 50);