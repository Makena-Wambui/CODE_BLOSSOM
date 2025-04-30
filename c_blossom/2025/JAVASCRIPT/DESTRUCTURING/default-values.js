/*
Each destructured property can have a default value.

This default value is used when the property is absent from the source object or has value undefined.

The default value is not used when the property  has value null.
*/

let object = {};
const { a = 1 } = object;
console.log(a); // 1
object = { b: undefined };
const { b = 2 } = object;
console.log(b); // 2
object = { c: null };
console.log(object);
const { c = 2 } = object;
console.log(c); // null because the default value is not used when the property has value null

/*
Default value can be any expression.
Will be evaluated when necessary.
*/

//object = { value: "Hey" };
object = {};

const { value = "Hello" } = object;
console.log(value); // Hey
