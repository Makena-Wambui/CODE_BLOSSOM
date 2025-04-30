/*
Array and object literals provide an easy way for creating ad hoc packages of data.
*/
const array = [1, 2, 3, 4, 5];

/*
Destructuring assignment uses similar syntax but on the left hand side of the assignment operator instead.

It defines which values to unpack from the sourced variable.
*/

let [a, b] = array;
console.log(a); // 1
console.log(b); // 2

// You can also destructure objects on the left hand
const obj = { key: "value", key2: "value2" };
const { key, key2 } = obj;
console.log(key);
console.log(key2);

const object = { a_1: "one", a_2: "two" };
const { a_1, a_2 } = object;
console.log(a_1); // one
console.log(a_2); // two
