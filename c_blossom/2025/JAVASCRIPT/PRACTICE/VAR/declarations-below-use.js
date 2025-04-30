/*
var declarations are processed when the function starts or when the script starts for globals

var varuables are defined from the beginning of the function, no matter where the definition is,
as long as the definition is not in a nested function.
*/

const { GridFSBucketReadStream } = require("mongodb");

function sayHello() {
  greeting = "Hello";

  console.log(greeting);

  var greeting;
}

sayHello();

// The above code is the same as:
function sayHello2() {
  var greeting;

  greeting = "Hello";

  console.log(greeting);
}

sayHello2();

// Also, the same as this
function sayHello3() {
  greeting = "Hello";

  if (false) {
    var greeting;
  }

  console.log(greeting);
}

sayHello3();

function sayHi4() {
  phrase = "Hello"; // ReferenceError: phrase is not defined
  if (false) {
    let phrase;
  }
  console.log(phrase);
}
sayHi4();
