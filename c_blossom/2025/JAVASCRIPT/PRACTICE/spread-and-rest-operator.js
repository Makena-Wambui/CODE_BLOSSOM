/*
Task 4: Spread and Rest Operators
7. Use the spread operator to concatenate two arrays into a new array.
8. Write a function that takes multiple arguments and uses the rest operator to collect them into
an array.
*/

// spread syntax
const array = [1, 2, 3];

const array1 = [4, 5, 6];

const newArray = [...array, ...array1];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]

// rest operator
function sum(...args) {
  console.log(args);
}

sum(); // []
sum(3, 30, 5); // [3, 30, 5]
