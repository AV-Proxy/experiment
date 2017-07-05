function translatePigLatin(str) {
  let newStr = str;

  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1;
  }

  if (isVowel(str.charAt(0))) {
    newStr = str + 'way';
  } else {
    let index = str.split('').findIndex(item => isVowel(item));

    newStr = str.substr(index) + str.substr(0, index) + 'ay';
  }

  return newStr;
}

translatePigLatin('glove');
