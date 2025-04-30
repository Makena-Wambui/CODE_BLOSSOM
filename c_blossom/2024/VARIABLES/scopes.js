// A variable can belong to one of the following scopes:

/*
1. Global scope - default scope for all code running in a script


2. Module scope - scope for all code running in a module


3. Function scope - scope created within a function

Identifiers created with let or const or class or in strict mode, function can have an additional scope -
4. Block scope - scope created within a block of code(inside curly braces)

A variable declared outside of any function is a global variable.
It will be available to all code in the script.

A variable declared inside a function is a local variable.
It will be available only within the function.

let and const declarations can be scoped to the block in which they are declared.

var declarations are not block scoped
They are only local to the function in which they are declared.
*/

// const x = 10;

if (Math.random() > 0.5) {
  const x = 5;
  console.log(x);
}

/* x is block scoped therfore not available outside the block */
// console.log(x); // ReferenceError: x is not defined

if (true) {
  var a = 100;
}
console.log(a); // 100 because var has global scope

/*
Scope is the current context of execution in which values and expressions are visible or can be referenced.

If that variable or expression is not in the current scope, it is said to be out of scope and will not be available for use.

You can layer scopes in a hierarchy,
and the innermost scope/child scope can access values in the outer/parent scope but not vice-versa.


A function creates a scope.
Variables defined inside a function are not accessible from outside the function or in other functions.
*/

function exampleFunction() {
  let myStr = "This variable can only be accessed inside this function.";

  console.log(myStr);
}

exampleFunction();

// console.log(myStr); // ReferenceError: x is not defined

// This is valid because the variable is declared outside the function hence it is a global variable

let str2 =
  "This variable is declared outside the function and has global scope.";

anotherFunction();

function anotherFunction() {
  const str = "This variable can only be accessed inside this function.";

  console.log(str);

  console.log(str2);
}

// console.log(str); // ReferenceError: x is not defined
console.log(str2);

// Blocks only scope let and const declarations, not var declarations

var num = 5;
console.log(num);
{
  var num = 10; // This will be accessible outside the block
}

console.log(num);

const num2 = 600;

{
  const num2 = 500; // This will not be accessible outside the block
}
console.log(num2); // 600
