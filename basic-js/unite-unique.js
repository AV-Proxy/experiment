function uniteUnique(arr) {
  let items = Array.prototype.slice.call(arguments).reduce((a,b) => a.concat(b));
  let items2 = [...arguments].reduce((a,b) => a.concat(b));
  let items3 = Array.from(arguments).reduce((a,b) => a.concat(b));

  return items3.filter((item, pos) => items.indexOf(item) === pos);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, [1]], [4, 7, 8]);
