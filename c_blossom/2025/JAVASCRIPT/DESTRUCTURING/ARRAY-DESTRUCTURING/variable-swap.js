/*
Two variable values can be swapped in one destructuring expression.

Without destructuring assignment, to swap two variable values will need a temporary variable.
*/

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

const array = [1, 2, 3, 4, 5];
[array[2], array[3]] = [array[3], array[2]];
console.log(array); // [1, 2, 4, 3, 5]
