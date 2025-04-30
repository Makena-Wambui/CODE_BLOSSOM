// In both array and object destrucuring, there are two kinds of destructuring patterns: assignment and binding.

/*
Binding pattern:
Starts with a declaration keyword like var, let or const.

Then each individual property must either be bound to a variable or further destructured.
*/

const object = { a: 1, b: { c: 2 } };
console.log(object.a); // 1
console.log(object.b);
console.log(object.b.c); // 2

/*
const {
  // two variables, a and d are bound to the values of the properties a and b.c
  a,
  b: { c: d },
} = object;

console.log(a); // 1
console.log(d); // 2


In the above code, all variables share the same declaration keyword const.

If you want some variables to be reassignable and others to be read only, you will have to destructure twice.
once with let and once with const.
*/

// with const
const { a } = object;
console.log(a);

let {
  b: { c: d },
} = object;
console.log(d);

/*
In other syntaxes where the JS language binds a variable for you like in the looping variable of for .. in, for ... of, for await ... of loops; Function parameters; catch block parameters; and the left-hand side of the for ... of loop, the destructuring binding pattern is used.
*/
