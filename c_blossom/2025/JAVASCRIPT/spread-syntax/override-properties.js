/*
When one object is spread into another object,
or when multiple objects are spread into one object,
properties with the same name may be encountered.

In such cases, these properties will take the last value assigned, and remain in the position it was originally set.
*/

const object1 = { foo: "bar", x: 20 };
const object2 = { foo: "baz", y: 20 };

const newObject = { x: 30, ...object1, ...object2, y: 50 };
console.log(newObject); // { x: 20, foo: 'baz', y: 50 }
