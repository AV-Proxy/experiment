function largestOfFour3(arr) {
  const array = [];

  arr.map(element => {
    const largest = Math.max(...element);
    return array.push(largest);
  });

  return array;
}

largestOfFour3([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
