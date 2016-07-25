function palindrome(str) {
  str = str.replace(/[.*+?^${}()|[\]\\,_;:-]/g, '');
  str = str.replace(/\s/g, '');
  str = str.toLowerCase();
  
  var newStr = str.split('').reverse().join('');
  
  if (newStr == str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("My age is 0, 0 si ega ym."));