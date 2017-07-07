function smallestCommon(arr) {
  let min = Math.min(...arr); // Math.min.apply(Math, arr)
  let max = Math.max(...arr); // Math.max.apply(Math, arr)
  let newArr = Array.apply(null, {length: max + 1}).map((elem, index) => index).slice(min);

  function gcd(a, b) {
    if (!b) return a;

    return gcd(b, a % b);
  }

  return newArr.reduce((a,b) => a * b / gcd(a,b));
}

console.log(smallestCommon([1, 13]));
