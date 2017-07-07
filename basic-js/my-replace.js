function myReplace(str, before, after) {
  let updated = before.charAt(0) === before.charAt(0).toUpperCase()
    ? after.charAt(0).toUpperCase() + after.substr(1)
    : after;

  return str.split(' ').map(elem => {
    return elem === before ? elem = updated : elem;
  }).join(' ')
}

console.log(myReplace('Let us go to the Store', 'Store', 'mall'));
