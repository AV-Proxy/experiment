function repeatString(str, num) {
  const array = [];

  for (let i = 0; i < num; i++) {
    array.push(str);
  }

  return array.join('');
}

repeatString('abc', 3);
