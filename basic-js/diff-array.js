function diffArray(arr1, arr2) {
  let newArr1 = arr1.filter(elem => arr2.indexOf(elem) === -1);
  let newArr2 = arr2.filter(elem => arr1.indexOf(elem) === -1);

  return newArr1.concat(newArr2);
}


diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
          ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
