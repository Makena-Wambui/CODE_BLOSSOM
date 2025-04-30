/*
To get a character at position i in a string:

Use [i]

OR

the method str.at(i)

Strings are zero indexed
Meaning the first character is at position 0


*/

let greeting = `Hey`;
console.log(greeting[0]); // First character H
console.log(greeting.at(0)); // First character H

// To access the last character in a string
console.log(greeting[greeting.length - 1]); // y
console.log(greeting.at(-1));

/*
.at(index) method allows negative positions.

at(-1) returns the last character
at(-2) returns the second last character
and so on

[] will return undefined for negative indices.
*/

greeting = "Hello Wambui";
console.log(greeting.length); // 12
console.log(greeting[6]);
console.log(greeting.at(-2));
console.log(greeting[-1]);

// You can also iterate over characters using for...of
let char;
for (char of greeting) {
  console.log(char);
}
