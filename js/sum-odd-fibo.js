function sumFibs(num) {
  const fib = [];
  const odd = [];

  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= num + 1; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    if (fib[i] > num) {
      break;
    }
  }

  fib.shift();
  fib.pop();

  fib.map((element) => {
    if ((element % 2) !== 0) { odd.push(element); }
    return odd;
  });

  return odd.reduce((a, b) => a + b);
}

sumFibs(10);
