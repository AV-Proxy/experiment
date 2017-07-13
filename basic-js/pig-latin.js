function translatePigLatin(str) {
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1;
  }
  let index = str.split('').reduce((test, elem, idx) => {
    return isVowel(elem) && !test ? test = idx : test;
  }, 0)

  return isVowel(str.charAt(0)) ? `${str}way` : str.slice(index) + str.slice(0, index) + 'ay';
}

console.log(translatePigLatin('love'));

