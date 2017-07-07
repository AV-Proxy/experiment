// returns sum of 'num' number of fibonacci numbers
function sumAllFib(num) {
  var fib = [1, 1];

  for (var i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib.reduce(function(a,b) {
    return a + b;
  });
}

// returns the sum of 'num' number of fibonacci numbers recursively
function recursiveSumFib(num) {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  return recursiveSumFib(num - 1) + recursiveSumFib(num - 2) + 1;
}

// returns the sum of all odd fibonacci numbers less than 'num'
function sumOddFibLessThan(num) {
  var fib = [1];

  for (var i = 1; i <= num;) {
    fib.push(i);
    i = fib[fib.length - 1] + fib[fib.length - 2];
  }

  return fib.filter(function(elem) {return elem % 2 !== 0 })
    .reduce(function(a, b) {return a + b});
}

console.log(sumAllFib(10));
console.log(recursiveSumFib(10));
console.log(sumOddFibLessThan(10));
