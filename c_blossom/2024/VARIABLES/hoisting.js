/*
var declarations are hoisted.

You can refer to that variable anywhere in your code, even before it's declaration is reached.

ie var declarations are lifted to the top of their scope.

This is called hoisting.

If you access a variable before it's declaration, it will return undefined.
this is because only the declaration and its default initializer are hoisted.(which is undefined), not its assignment.
*/

console.log(x === undefined);
var x = 10;

/*
The above statements are the same as:
 var x;
console.log(x === undefined);
x = 10;
*/

(function () {
  console.log(y === undefined);
  var y = 8;
})();

/*
The above statements are the same as:
(function () {
  var y;
  console.log(y === undefined);
  y = 8;
})();
*/

console.log(x); // 10 because x is declared and initialized and has global scope.
// console.log(y); // ReferenceError: y is not defined because y is declared and initialized in a function scope.

/*
Are let and const declarations hoisted?

Referencing a variable in the block before it's declaration results in a ReferenceError.
The variable is in a temporal dead zone from the start of the block until the declaration is encountered.
*/

/*
if (true) {
  console.log(y === undefined);
  let y = 8;
}
*/

/*
console.log(myName);
const myName = "John";
*/

/*
var declarations only hoist the declaration, not the variable assignment.

function declarations are hoisted entirely.
You can call the functin anywhere in its scope before its declaration.
*/
