function mutation(arr) {
  const string = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();
  let final = 0;

  for (let i = 0; i < test.length; i++) {
    if (string.indexOf(test[i]) === -1) {
      final = -1;
    }
  }

  if (final === -1) {
    return false;
  }

  return true;
}

mutation(['hello', 'no']);
