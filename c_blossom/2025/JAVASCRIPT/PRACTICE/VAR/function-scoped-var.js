/*
If a code block is inside a function,then the var declared variable becomes a function level variable.
*/

function sayHello() {
  if (true) {
    var greeting = "Hello";
  }
  console.log(greeting);
}

sayHello();
console.log(greeting); // ReferenceError: greeting is not defined
