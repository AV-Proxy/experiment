function largestOfFour3(arr) {
  return arr.reduce((value, elem, index) => {
    return value.concat(Math.max(...elem)); // Math.max.apply([], elem);
  }, [])
}

console.log(largestOfFour3([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
