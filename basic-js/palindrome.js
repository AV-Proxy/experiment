function palindrome(str) {
  const str2 = str.replace(/[.*+?^${}()|[\]\\,_;:-]/g, '').replace(/\s/g, '').toLowerCase();
  const newStr = str2.split('').reverse().join('');

  return newStr === str2;
}

console.log(palindrome('My age is 0, 0 si ega ym.'));
