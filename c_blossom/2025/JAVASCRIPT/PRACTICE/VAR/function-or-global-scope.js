/*
var has no block scope.

variables declared with var have either function or global scope.

They are visible through blocks.

*/

if (true) {
  var test = true;
}

console.log(test); // the var declared variable test lives outside if, because var ignores code blocks

// test is therefore a global variable.

// if we used let instead of var
if (true) {
  let test1 = true; // this variable is only visible inside if
}

console.log(test);
//console.log(test1); // ReferenceError: test1 is not defined

// using var in loops; var cannot be block or loop local
for (var i = 0; i < 10; i++) {
  var one = 1;
  one++;
  console.log(one);
}

console.log(i); // i is visible after loop, it is a global variable.
console.log(one); // one is visible outside the loop, it is a global variable.
