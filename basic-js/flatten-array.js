function flattenArray(arr) {
  let flat = [].concat(...arr); // let flat = [].concat.apply([], arr);

  return flat.some(Array.isArray) ? flattenArray(flat) : flat;
}

console.log(flattenArray([1, 2, 3, [[4]]]));
