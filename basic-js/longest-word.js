function longestWord(str) {
  return str.split(' ').reduce((num, elem, index) => {
    return elem.length > num ? num = elem.length : num;
  }, 0);
}

console.log(longestWord('The quick brown fox jumped over the lazy dog'));
