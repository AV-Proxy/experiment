function sumPrimes(num) {
  const notPrimes = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!notPrimes[i]) {
      primes.push(i);

      for (let j = i * 2; j <= num; j += i) {
        notPrimes[j] = true;
      }
    }
  }

  return primes.reduce((a, b) => a + b);
}

sumPrimes(977);
