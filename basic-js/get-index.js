function getIndexToIns(arr, num) {
  return arr.sort().reduce((sum, value, index) => {
    if (num > value) {
      sum++
    }

    return sum;
  }, 0);
}

console.log(getIndexToIns([40, 70, 60, 30, 10, 90, 80], 50));
