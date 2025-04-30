const myName = "Alice";

/*
We call the greeting function before it is declared.
This code runs without error.

This is because the JS Interpreter hoists the entire function declaration to the top of the current scope.
*/

console.log(greeting(myName));

function greeting(name) {
  return `Hello, ${name}!`;
}

/*
Therefore the above statements are equivalent to the following:

function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting(myName));
*/

/*
Only function declarations are hoisted.

Function expressions are not hoisted.

For example, the following code will throw an error:
*/

//console.log(myFunc(5)); // ReferenceError: Cannot access 'myFunc' before initialization
const myFunc = function (number) {
  return number - 5;
};

console.log(myFunc(5)); // 0
