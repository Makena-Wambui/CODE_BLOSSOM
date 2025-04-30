/*
Function expressions are not hoisted, unlike function declarations.
Meaning you cant use function expressions before you create them
*/

//console.log(getAreaOfCircle(3)); // ReferenceError: Cannot access 'getAreaOfCircle' before initialization

const getAreaOfCircle = function (radius) {
  return Math.round(Math.PI * radius ** 2);
};

console.log(getAreaOfCircle(3));
