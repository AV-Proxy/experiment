function sumPrimes(num) {
  let arr = Array.apply(null, {length: num + 1}).map((elem, index) => index);
  let arr2 = [...Array(num + 1).keys()];
  let arr3 = Array.from(Array(num + 1).keys());

  function isPrime(n) {
    let m = Math.floor(Math.sqrt(n));

    while (m > 1) {
      if (n % m === 0) return false;
      m--;
    }

    return true;
  }

  return arr3.slice(2).filter(n => isPrime(n)).reduce((a,b) => a + b);
}

sumPrimes(977);
