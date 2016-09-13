function doubleAll(numbers) {
  var result = [];
  numbers.map(element => { result.push(element * 2); });
  return result;
}

module.exports = doubleAll;
