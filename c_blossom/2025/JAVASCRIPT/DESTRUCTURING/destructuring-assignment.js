/*
Destructuring assignment syntax is a JS expression that allows us to unpack values from arrays or properties from objects into distinct variables.
It is a shorthand for extracting multiple properties from an object or multiple elements from an array and assigning them to variables. 
It is a convenient way to extract multiple values from data stored in objects and arrays.
*/

let a, b, args;

[a, b] = [5, 10];

console.log(a);
console.log(b);

[a, b, ...args] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(args);

/*
const [a, b] = array;
const [a, , b] = array;
*/

const [a1, , b1] = [1, 2, 3, 4, 5];
console.log(a1);
console.log(b1); // 3

// const [a = aDefaultValue, b] = [1, 2, 3]
const [a2 = 1, b2] = [, 2, 3, 4];
console.log(a2); // 1
console.log(b2);

// const [a, b, ...rest] = array
let arr = [5, 10, 15, 10];
let [i, j, ...rest] = arr;
console.log(i, j, ...rest);

// const [a, , ...rest] = array
arr = [...arr, ...[25, 30, 35]];
console.log(arr);
let [element1, , ...params] = arr;
console.log(element1);
console.log(params);

/*
const [a, b, ...{pop, push}] = array

const [a, b, ...[c, d]] = array


OBJECTS:
const {a, b} = object;

const {a: a1, b: b1} = object;

const {a : a1 = aDefaultValue, b = bDefaultValue} = object;

const {a, b, ...rest} = object;

const {a: a1, b: b1, ...rest} = object;

const {[key]: value} = object;


*/
