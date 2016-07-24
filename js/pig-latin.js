function translatePigLatin(str) {
  var array = [];
  array.push(str);
  
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
  }

  if (isVowel(str.charAt(0))) {
    array.push("way");
    array = array.join("");
  } else if (!isVowel(str.charAt(0)) && !isVowel(str.charAt(1))) {
    array.push(array[0].charAt(0));
    array.push(array[0].charAt(1));
    array.push("ay");
    array = array.join('');
    array = array.slice(1);
    array = array.slice(1);
  } else {
    array.push(array[0].charAt(0));
    array.push("ay");
    array = array.join('');
    array = array.slice(1);
  }
  
  return array;
}

translatePigLatin("glove");