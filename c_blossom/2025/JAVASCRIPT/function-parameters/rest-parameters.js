/*
Rest parameter syntax allows us to represent an indefinite number of arguments as an array.
The rest parameter is added to the end of the function's parameter list and prefixed with three dots.
When the function is called, the rest parameter collects all the remaining arguments into an array.

In this example, the rest parameter collects all the arguments passed to the function from the second one to the last one.
The function then multiplies theses arguments with the first one.

Example:
*/

function multiply(multiplier, ...otherArgs) {
  // otherArgs is an array that we iterate over
  // we multiply each element of the array with the multiplier

  let i,
    result = [];

  for (i = 0; i < otherArgs.length; i++) {
    result.push(multiplier * otherArgs[i]);
  }

  return result;
}

console.log(multiply(2, 3, 4, 5));
