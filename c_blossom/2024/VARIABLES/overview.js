// There are three kinds of variable declarartions in JS:

/*
1. var - Declare a variable, optionally initializing it to a value.

2. let - Declare a block-scoped, local variable, optionally initializing it to a value.

3. const - Declare a block-scoped, read-only named constant.

The names of variables are called identifiers. An identifier is simply a name that you give to an element in your program. It can be a function, a variable, an argument, or a class.
Identifiers conform to certain rules.


Variables should be declared before they are used.
Before, JS used to allow assignment to undeclared variables.
This would create an undeclared global variable.
This causes an error in strict mode.
Should be avoided altogether.

DECLARATION AND INITIALIZATION
let x = 42;
let x part is the declaration.
= 42 part is an initializer

After you declare your variables, you can access them later in your code without getting a ReferenceError.
The initializer assigns a value to the variable.
It is optional in var and let declared variables.
If a variable is declared without an initializer, it is assigned the value undefined.

const declarations must have an initializer.
Forbid reassignment of the variable.

*/

let x;
console.log(x); // undefined

// const a;
console.log(a); // SyntaxError: Missing initializer in const declaration

const b = undefined;
console.log(b); // undefined
