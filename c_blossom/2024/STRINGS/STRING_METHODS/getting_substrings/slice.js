/*
str.slice(start, end);

This will return the string starting from the start index and to but not inclusive 
of the ending index end.
*/

let str = "Hello, World!";
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(0, 1)); // H
console.log(str.slice(7, 12)); // World

// if no second argument is provided, slice goes to the end of the string.
console.log(str.slice(7)); // World!

// start and end can also be negative values
// negative values are counted from the end of the string

console.log(str.slice(-4, -1));
console.log(str.slice(-6));
