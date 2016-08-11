function longestWord(str) {
  const array = str.split(' ');
  let longest = 0;

  array.map(element => {
    while (longest < element.length) {
      longest = element.length;
    }
    return longest;
  });

  return longest;
}

longestWord('The quick brown fox jumped over the lazy dog');
