// use spread syntax to make a shallow copy of an array

const arr = [1, 2, 3];
const arr2 = [...arr];
console.log(arr2);
console.log(arr === arr2);

// The above code is the same as array.slice()
const arr3 = arr.slice();
console.log(arr3);

arr2.push(4);
console.log(arr2);
console.log(arr); // the original array is unaffected.

/*
Spread syntax effectively goes one level deep when copying arrays
It may therefore be unsuitable for copying multidimensional arrays
This is also true for the method - Object.assign()
No native operation in JS does a deep clone

The web API method -> structuredClone() allows deep copying values of certain supported types.
*/

const a = [[1], [2], [3]];
const b = [...a];
console.log(b);

console.log(b.shift().shift());
console.log(b);
console.log(a); // even the original array is affected
