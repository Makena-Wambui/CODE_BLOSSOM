// Immutability means a string cannot be changed once it is created.
// You can not change a character in a string.

let str = "Hi";
str[0] = `h`;
console.log(str); // Hi
console.log(str[0]); // will still be H

// The workaround would be to create a whole new string and assign it to str

str = "h" + str[1];
console.log(str); // hi
