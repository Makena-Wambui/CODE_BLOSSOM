/* 
str.includes(sustr, pos)

returns true or false dep on whether the string contains the substring or not.

We can use it when we need to test for a match and do not need the position where the string occurs.

*/
let str = "I scream, you scream, we all scream for ice cream.";
let substr = "scream";
console.log(str.includes(substr));
console.log(str.includes("Hello"));

// pos is optional: it is the position to start searching from
console.log(str.includes(substr, 30));
