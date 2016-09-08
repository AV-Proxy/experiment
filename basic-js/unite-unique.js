function uniteUnique(...args) {
  const temp = [];
  let unique = [];

  args.forEach(element => {
    element.map(i => ({
      temp: temp.push(i),
    }));
  });

  unique = temp.filter((elem, index, self) => ({
    index: self.indexOf(elem),
  }));

  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, [1]], [4, 7, 8]);
