/*
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";
*/

function ucFirst(str) {
  // Add a check for non string input
  if (typeof str !== "string") {
    return "Input is not a string";
  }

  // check for empty string
  if (!str) {
    return "Empty string";
  }

  let newString = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newString;
}

console.log(ucFirst("john")); // John
console.log(ucFirst(""));
console.log(ucFirst(123));
console.log(ucFirst(null));
