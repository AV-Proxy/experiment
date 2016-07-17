function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var array = [];
  
  for (var i = min; i <= max; i++) {
    array.push(i);
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  array = array.reduce(sum);
  
  return array;
}

sumAll([5, 10]);