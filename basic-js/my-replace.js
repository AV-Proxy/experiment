function myReplace(str, before, after) {
  let aft = after;
  let array = [];

  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    aft = `${after.charAt(0).toUpperCase()}${after.substr(1)}`;
  } else {
    aft = `${after}`;
  }

  array = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    if (array[i] === before) {
      array.splice(i, 1, aft);
    }
  }

  return array.join(' ');
}

myReplace('Let us go to the store', 'store', 'mall');
