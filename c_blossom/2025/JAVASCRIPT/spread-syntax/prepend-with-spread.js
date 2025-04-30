// Array.prototype.unshift() is used to insert an arry of values at the start of an existing array.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);

console.log(arr1);
// unshift modifies the original array in place
Array.prototype.unshift.apply(arr2, arr1);
console.log(arr2);

// With spread syntax:
let arr = [8, 9, 10];
const a = [5, 6, 7];
arr = [...a, ...arr];
// spread syntax creates a new array
console.log(arr);
