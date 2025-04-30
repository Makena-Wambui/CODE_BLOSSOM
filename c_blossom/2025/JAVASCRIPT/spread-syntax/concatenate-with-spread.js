// concat() is often used to concatenate an array at the end of an existing array.

let arr = [1, 2, 3];
const arr2 = [4, 5, 6];

// Append all items from arr2 to arr using concat
arr = arr.concat(arr2);

console.log(arr);

// With spread syntax:
let arr3 = [-2, -1, 0];
const arr4 = [1, 2, 3];
arr3 = [...arr3, ...arr4];
console.log(arr3);
