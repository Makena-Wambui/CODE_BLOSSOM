/*
str.substring(start, end);

Returns the substring between start and end but not inclusive of the end index.

Almost the same as slice.

But with substring start can be greater than end,
If start is greater than end, substring method will simply swap the two arguments.

*/

let str = "stringify";

console.log(str.substring(0, 6));
console.log(str.substring(5, 8));
console.log(str.substring(8, 5));
// with slice
console.log(str.slice(5, 8));
console.log(str.slice(8, 5)); // returns empty string

// Negative values are not supported by substring method
console.log(str.slice(-3, -1));
console.log(str.substring(-3, -1)); // returns an empty string
console.log(str.substring(-7, -3));
console.log(str.slice(-7, -3));
