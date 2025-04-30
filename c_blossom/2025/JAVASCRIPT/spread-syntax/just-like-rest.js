// looks exactly like rest syntax

/*
Spread syntax is the opposite of rest syntax.

Spread expands an array into its elements
Rest collects multiple elements and condenses them into a single element
*/

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [3, 4, 5];

console.log(sum(...numbers));

// same as:
console.log(sum.apply(null, numbers));

/*
 SYNTAX:

 myFunc(a, ...iterableObj, b)

 [1, ...iterableObj, '4', 'five', 6]

 {...obj, {key: 'value'}}


 -> all elements in an object or array need to be included in a new array or object.

 -> all elements in an array or object need to be applied one by one in a function call's arguments list

 3 distinct places that acccept the spread syntax:
    1. Function arguments List: myFunc(a, ...obj, b)

    2. array literal: [1, ...obj, 2, 'three']

    3. object literal: {...obj, key: 'value'}

    Only iterables such as Array and String can be spread in an array literal or function argument list.

    Most objects are not iterable, including plain objects that do not have a Symbol.iterator method.
*/

const object = { key: "value" };

/*
const array = [...object]; // trying to spread a plain object in an array literal

console.log(array); // TypeError: object is not iterable
*/

/*
Spreading in an object literal enumerates the own properties of the value.

In typical arrys, all indices are enumerable own properties.
Thus arrays can be spread into object literals.
*/

const arr = [1, 2, 3];
const obj1 = { ...arr };
console.log(obj1); // { '0': 1, '1': 2, '2': 3 }

/*
All primitives like boolean, number, string, null, undefined, and symbol can be spread in object literals.

Out of these primitives, only strings have enumerable own properties.
Spreading any other primitive does not create properties on the new object.
*/

const newNum = { ...3 };
console.log(newNum); // {}

const newBool = { ...true };
console.log(newBool); // {}

const newObj = { ...5, ...false, ..."hey" };
console.log(newObj); // { '0': 'h', '1': 'e', '2': 'y' }
