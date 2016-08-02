function sumFibs(num) {
  var fib = [];
  var odd = [];

  fib[0] = 0;
  fib[1] = 1;
  
  for(var i = 2; i <= num + 1; i++) {
    fib[i] = fib[i-2] + fib[i-1];
    if (fib[i] > num) {
      break;
    }
  }
  
  fib.shift();
  fib.pop();
  
  for (var j = 0; j < fib.length; j++) {
    if ((fib[j] % 2) !== 0) {
      odd.push(fib[j]);
    }
  }
  
  return odd.reduce(function(pre, cur) {return pre + cur;});
}

sumFibs(10);