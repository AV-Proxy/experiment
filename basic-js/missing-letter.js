function missingLetter(str) {
  const array = [];
  const missing = [];

  for (let i = 0; i < str.length; i++) {
    array.push(str.charCodeAt(i));
  }

  array.map((item, index) => {
    if ((array[index + 1] - item) !== 1) {
      missing.push(array[index + 1] - 1);
    }
    return missing;
  });

  missing.pop();

  if (missing.length !== 0) {
    return String.fromCharCode(missing);
  }

  return undefined;
}

missingLetter('bcdf');
