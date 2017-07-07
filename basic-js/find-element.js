function findElement(arr, func) {
  return arr.filter(elem => func(elem))[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
