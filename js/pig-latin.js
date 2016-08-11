function translatePigLatin(str) {
  let array = [];
  array.push(str);

  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
  }

  if (isVowel(str.charAt(0))) {
    array.push('way');
    array = array.join('');
  } else if (!isVowel(str.charAt(0)) && !isVowel(str.charAt(1))) {
    array.push(`${array[0].charAt(0)}${array[0].charAt(1)}ay`);
    array = array.join('').slice(2);
  } else {
    array.push(`${array[0].charAt(0)}ay`);
    array = array.join('').slice(1);
  }

  return array;
}

translatePigLatin('glove');
