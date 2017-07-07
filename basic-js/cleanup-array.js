function cleanUp(arr) {
  return arr.filter(elem => !!elem);
}

console.log(cleanUp([7, 'ate', '', false, 9]));
