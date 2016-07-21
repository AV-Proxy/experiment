function sumPrimes(num) {
  var notPrimes = [];
  var primes = [];
  
  for (var i = 2; i <= num; i++) {
    
    if (!notPrimes[i]) {
      primes.push(i);
      
      for (var j = i * 2; j <= num; j = j + i) {
        notPrimes[j] = true;
      }
    }
  }
  
  var sum = primes.reduce(function(a, b) {
    return a + b;
  }, 0);
  
  return sum;
}

sumPrimes(977);