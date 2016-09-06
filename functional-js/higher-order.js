/*
  A higher-order function is a function that does at least one of the following:
    * Take one or more functions as an input
    * Output a function
*/

/*
  Unlike many other languages with imperative features, JavaScript allows you to
  utilize higher-order functions because it has "first-class functions". This
  means functions can be treated just like any other value in JavaScript: just
  like Strings or Numbers, Function values can be stored as variables, properties
  on objects or passed to other functions as arguments. Function values are actually
  Objects (inheriting from Function.prototype) so you can even add properties and
  store values on them, just like any regular Object.

  The key difference between Functions and other value types in JavaScript is the
  call syntax: if a reference to a function is followed by parenthesis and some
  optional comma-separated values: someFunctionValue(arg1, arg2, etc), then the
  function body will be executed with the supplied arguments (if any).
*/

// Credit: [https://github.com/timoxley/functional-javascript-workshop]

function repeat(operation, num) {
  if (num <= 0) { return operation(); }
  // If 'num' is 3, then '--num' sets 'num' to 2 and returns 2
  // If 'num' is 3, then 'num--' returns 3 and, only then, sets 'num' as 2
  return repeat(operation, --num);
}

module.exports = repeat;
