/*
str.substr(start, length);

Gets the string from start, with the given length.

So instead of specifying the ending position, we provide the length of the substring.

*/

let str = "stringify";

console.log(str.substr(2, 4)); // start from the 2nd index and get 4 characters

// Start can be negative, to count from the end of the string.
console.log(str.substr(-4, 3));
