/*
Used to group 0 or more statements together.

delimited by a pair of braces({})

Contains a list of 0 or more statements and declarations.

They can prevent temporary variables from leaking to the global scope.  
*/

var x = 1;
let y = 2;

if (true) {
  var x = 11; // Reassigns the variable x declared in line 9
  let y = 22; // y is block scoped so can not be accessed outside the block
  console.log(++x);
  console.log(++y);
}

console.log(x); // x is globally scoped so can be accessed outside the block, new value is 12
console.log(y); // y is block scoped so can not be accessed outside the block, value is 2

/*
Function declarations inside blocks in strict mode are scoped to that block and hoisted to the top of the block.
*/

("use strict");
{
  foo();
  function foo() {
    console.log("foo");
  }
}

foo();

/* Body of a for loop */

// A for loop can accept a single statement or a block of statements enclosed in braces as its body.
for (let i = 0; i < 10; i++) console.log(i);

// If you wat to execute more than one statement in the loop body, you can group them in a block statement.
for (let j = 0; j < 10; j++) {
  console.log(j);
  console.log(j * j);
}

for (let j = 0; j < 10; j++) {
  if (j < 9) {
    process.stdout.write(j + ", ");
  } else {
    process.stdout.write(j.toString() + "\n");
  }
}

// Encapsulate data in a block statement
/*
let and const declarations are block scoped.
Allows you to hide data from the global scope, without having to create a function.
*/

let sector;
console.log(Math.PI);

{
  // const or let declaations in this block are not accessible outside of it
  const angle = Math.PI / 2;
  // console.log(angle);
  const radius = 10;

  sector = {
    angle,
    radius,
    area: (angle / 2) * radius * radius,
    perimeter: 2 * radius + angle * radius,
  };
}

console.log(sector);
// console.log(angle); // ReferenceError: angle is not defined

var variable1 = 1;

{
  var variable1 = 2;
  var variable2 = 3;
  console.log(variable1); // 2
  console.log(variable2); // 3
}

console.log(variable1); // 2
console.log(variable2); // 3
