function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  const array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array.reduce((a, b) => a + b);
}

sumAll([5, 10]);
