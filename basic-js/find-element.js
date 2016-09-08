function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (func([arr[i]])) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }

  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
