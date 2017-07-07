function mutation(arr) {
  return arr[1].split('').reduce((test, value, index) => {
    if (arr[0].indexOf(value) === -1) {
      test = false;
    }

    return test;
  }, true);
}

console.log(mutation(['hello', 'hell']));
