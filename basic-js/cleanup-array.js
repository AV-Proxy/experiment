function cleanUp(arr) {
  const newArray = [];

  arr.map(element => {
    if (element) { newArray.push(element); }
    return newArray;
  });

  return newArray;
}

cleanUp([7, 'ate', '', false, 9]);
