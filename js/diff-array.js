function diffArray(arr1, arr2) {
  const array = [];

  if (arr1.length < arr2.length) {
    arr2.map(element => {
      const a = arr1.indexOf(element);

      if (a < 0) { array.push(element); }

      return array;
    });
  } else if (arr1.length >= arr2.length) {
    arr1.map((element, index) => {
      const b = arr2.indexOf(element);
      const c = arr1.indexOf(arr2[index]);

      if (b < 0) { array.push(element); }
      if (c < 0) { array.push(arr2[index]); }

      return array;
    });
  }

  return array.filter(v => !!v);
}


diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
          ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
