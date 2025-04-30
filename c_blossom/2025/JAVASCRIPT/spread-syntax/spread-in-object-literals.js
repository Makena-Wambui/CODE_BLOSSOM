//copying and merging objects
const object1 = { foo: "one", bar: 2 };
const object2 = { x: "three", y: 4 };

const newObject = { ...object1, ...object2 };
console.log(newObject);

/*
Spreading creates a shallow copy of the original object
The copy does not have non enumerable properties
The prototype is also not copied.
Similar to copying an array.
*/

const clone = { ...object1 };
console.log(clone);
