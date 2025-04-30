/*
This pattern does not start with a keyword like var, let or const.

Instead, each destructured property is assigned to a target of assignment.

This target may either be declared beforehand.
Or a property of another object.
Generally, anything that can appear on the left hand side of an assignment expression.
*/

const numbers = [];

const object = { a: 1, b: 2 };

({ a: numbers[0], b: numbers[1] } = object); // properties a and b are assigned to properties of the numbers array

console.log(numbers);

/*
The () around the assignment statement are required when using object literal destructuring assignment without a declaration keyword.

{a, b} = {a: 1, b: 2}; is invali syntax as {a, b} onthe left hand side is interpreted as a block statement and not an object literal according to the rules of expresion statements.

({a, b} = {a: 1, b:2}) is valid
const {a, b} = {a: 1, b: 2}; is also valid

The equivalent binding pattern of the code above is invalid syntax.
*/

const obj = { key: "value", key2: "value2" };
// Binding pattern
const { key, key2 } = obj;
console.log(key);
console.log(key2);

// assignment pattern
const obj1 = { key: "value", key2: "value2" };
const array = [];
({ key: array[0], key2: array[1] } = obj1);
console.log(array);

/*
Invalid syntax

const array2 = []; 
const obj2 = { key: "value", key2: "value2" };
const {key: array2[0], key2: array2[1]} = obj2 
*/

/*
const myNumbers = [];
const myNumbers[0] = object.a; // invalid syntax
const myNumbers[1] = object.b; // invalid syntax
console.log(myNumbers);
*/

/*
You can only use assignment patterns as the left hand side of the assignment operator.
They can not be used with compound assignment operators like *= or +=.
*/
