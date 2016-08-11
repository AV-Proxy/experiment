function palindrome(str) {
  const str2 = str.replace(/[.*+?^${}()|[\]\\,_;:-]/g, '').replace(/\s/g, '').toLowerCase();
  const newStr = str2.split('').reverse().join('');

  if (newStr === str2) {
    return true;
  }

  return false;
}

palindrome('My age is 0, 0 si ega ym.');
