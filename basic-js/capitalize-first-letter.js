function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(elem => `${elem[0].toUpperCase()}${elem.slice(1)}`)
    .join(' ');
}

console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));
