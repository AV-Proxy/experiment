function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  let string = '';

  array.map(element => {
    string += `${(element[0].toUpperCase())}${element.substr(1)} `;
    return string;
  });

  return string.slice(0, string.length - 1);
}

titleCase('HERE IS MY HANDLE HERE IS MY SPOUT');
