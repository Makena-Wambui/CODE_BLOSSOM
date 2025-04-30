// IIFE allows us to use language constructs such as switch in an expression.

const myObject = {
  key: "new value",
  1: "one",
};

myObject.key = (() => {
  switch (myObject.key) {
    case "value":
      return "new value";
    case "new value":
      return "value";
    default:
      return "default";
  }
})();

console.log(myObject.key); // value

// This approach is especially useful when you want to make a variable const, but are forced to use let or var during initialization.

/*
let onlyAssignedOnce;

try {
  onlyAssignedOnce = functionThatThrowsAnError();
} catch (error) {
  onlyAssignedOnce = null;
}

function functionThatThrowsAnError() {
  throw new Error("Error");
}

console.log(onlyAssignedOnce); // null because functionThatThrowsAnError throws an error
*/

// we can use an IIFE to make the variable const and still assign it only once.

const onlyAssignedOnce = (() => {
  try {
    return functionThatThrowsAnError();
  } catch (error) {
    return null;
  }
})();

function functionThatThrowsAnError() {
  //throw new Error("Error");
  return "value";
}

console.log(onlyAssignedOnce); // null because functionThatThrowsAnError throws an error
