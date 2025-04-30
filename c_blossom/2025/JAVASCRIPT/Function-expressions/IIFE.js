// IIFEs are used when you want to execute many statements in their own scope, and possibly return a value, in a location that requires a single expression.

// IIFEs have been obsoleted by modern JavaScript features like block-scoped variables and arrow functions and modules.

// IIFEs are more commonly used with arrow functions.

/*
(function () {
    // statements
})()
*/

// IIFE with arguments
(function (a, b) {
  console.log(a + b);
})(1, 2);

// use an IIFE to initialize a variable
const value = (() => {
  // use Math.random to generate a random nummber between 0 and 1
  const random = Math.random();

  // initializing the variable value to heads or tails
  if (random > 0.5) {
    return "heads";
  } else {
    return "tails";
  }
})();

console.log(value);
