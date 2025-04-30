/*
2: Conditionals
a. Write a function called `isEven` that takes a number as an argument and returns `true` if it's
even and `false` if it's odd.
*/

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(15)); // false
