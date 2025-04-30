/*
You can have a function that returns an array.
Destructuring makes working with the array return value more concise.

We have a function that returns [1, 2] which can be parsed in a single line with destructuring.
*/

function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
