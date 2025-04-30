/*
If you declare the same variable with let twice in the same scope,
you get a syntax error.
*/

/*
let user = "";
let user = "Admin";

console.log(user);
*/

let user = "Alice";

if (true) {
  let user = "John";
  console.log(user);
}

console.log(user);
/*
with var, we can redeclare a variable any number of times.

if you use var with an already declared variable, it will just be ignored
*/

var name = "Titan";
var name = "Zeus"; // this var does nothing, it is just ignored. It does not trigger an error.
console.log(name);

if (true) {
  var name = "Keziah";
  console.log(name);
}

console.log(name);
