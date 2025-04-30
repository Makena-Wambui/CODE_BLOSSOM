/*
Take an array of length N

if the number of variables on the left hand side of the destructuring assignment is more than N, only the first N variables are assigned values.
Values of the remaining variables will be undefined.
*/

const colors = ["red", "green", "blue", "yellow"];

const [one, two, three, four, five] = colors;

console.log(one); // red
console.log(two); // green
console.log(three); // blue
console.log(four); // yellow
console.log(five); // undefined
