function confirmEnding(str, target) {
  let num = target.length;

  return num ? target === str.substr(-num) : console.log('target is empty');
}

console.log(confirmEnding('He has to give me a new name', 'fame'));
