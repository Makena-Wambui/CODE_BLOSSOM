/*
Parameters of functions default to undefined.

In some situations, it is useful to set a different default value. This is where default parameters can help.

The older method for setting defaults was to test the value of the parameter in the body of the function and assign a value if they are undefined.

Example:
*/

function multiply(a, b) {
  // If this line of code was not added, then multiply(2) would return NaN
  // console.log(typeof b);
  b = typeof b === "undefined" ? 1 : b; // so multiply(2) would be equivalent to multiply(2, 1)
  return a * b;
}

console.log(multiply(2));

// with default parameters a manual check in the function body is not needed.
// put 1 as the default value for b in the function head

function newMultiply(a, b = 1) {
  return a * b;
}

console.log(newMultiply(5)); // 5
console.log(newMultiply(5, 2)); // 10
