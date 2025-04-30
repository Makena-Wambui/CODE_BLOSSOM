// Sometimes you want to assign a variable depending on a condition.

// An example using an if statement

let accessAllowed;

let age = prompt("What is your age?", "");

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

/*
Ternary operator allows you to do this in a single line.

It is called ternary beacuse it has three operands.

SYNTAX:
let myVar = condition ? value1 : value2

condition is evaluated first.
if truthy, value1 is returned.
if falsy, value2 is returned.
*/
accessAllowed = age >= 18 ? "Yes" : "No"; // the parantheses are optional because ? has a lower precedence than >=
