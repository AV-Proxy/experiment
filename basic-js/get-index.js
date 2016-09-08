function getIndexToIns(arr, num) {
  const array = arr.sort();
  let test = 0;

  array.map(element => {
    if (num > element) {
      test++;
    }
    return test;
  });

  return test;
}

getIndexToIns([40, 70, 60], 50);
