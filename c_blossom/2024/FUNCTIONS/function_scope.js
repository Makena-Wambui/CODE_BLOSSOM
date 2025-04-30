/*
Variables defined inside a function can not be accessed anywhere outside the function.

This is because the variable is defined only in the scope of the function.

A function can access all avariables and functions defined within the scope in which it is defined.

ie A function defined in the global scope can access all variables and functions defined in the global scope.

A function defined within another function has access to all variables defined in its parent function, and any other variables the parent function has access to.
*/

// Variables defined in the global scope
const num1 = 5;
const num2 = 10;
const myName = "Alice";

// Function defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply());

// Nested function
function getScore() {
  //const num1 = 2;
  //const num2 = 3;

  function add() {
    return `${myName} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // Alice scored 5
