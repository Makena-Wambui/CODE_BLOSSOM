// primitives can be spread in objects
let num = 1;

let obj = { ...num };

//const ar = [...num]; // num is not iterable

console.log(obj);

// all falsy values do not have enumerable own properties

num = "";

obj = { ...num };
console.log(obj);
console.log(Boolean(num));

// Because of the above reasons, we can simply use the Logical && operator
const isSumer = true;

/*
If isSumer is any falsy value, the fruits object wont contain the watermelon property
If isSumer is true, then that property will be created on the fruits object.
*/
const fruits = { apple: 10, bananas: 20, ...(isSumer && { watermelon: 60 }) };
console.log(fruits);
