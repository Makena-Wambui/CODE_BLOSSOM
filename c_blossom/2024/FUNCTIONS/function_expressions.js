/*

A function declaration is syntactically a statement,

Functions can also be craeted using function expressions.
Such a function can be anonymous; it does not have a name.
*/

// Function square as a function declaration vs as a function expression
// Function declaration
/*
function square(number) {
  return number * number;
}

console.log(square(5)); // 25
*/

// Function expression
const square = function (number) {
  return number * number;
};
console.log(square(4)); // 16

/*
You can also provide a function name with a function expression.
This way the function can refer to itself.

Also makes it easier to debug the code.
*/

const factorial = function fac(number) {
  /* 
    This function returns the factorial of a number.

    For example factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
    
    Factorial of 4 is 4 * 3 * 2 * 1 = 24

    Hence you could say factorial of 5 is 5 * factorial of 4

    This is the recursive nature of the function.

    The factorial function calls itself.

    The factorial of 0 and 1 is 1.
    */
  return number < 2 ? 1 : number * fac(number - 1);

  /*
  The above return statement which uses a ternary operator is the same as:

  if (number < 2) {
    return 1;
  } else {
    return number * fac(number - 1);
  }
  */
};

console.log(factorial(5)); // 120

/*
Function expressions are convenient when you want to pass a function as an argument to another function.

This example shows a function map that receives a function as first argument and an array as second argument.
*/

function map(func, arr) {
  // create a new array to store the results of the function
  const newArr = new Array(arr.length);

  // iterate over the array passed as an argument
  // call the function passed as an argument on each element of the array
  // store the result in the new array

  for (let indx = 0; indx < arr.length; indx++) {
    newArr[indx] = func(arr[indx]);
  }
  return newArr;
}

// Let's create a function defined as a function expression
// This function will be executed for every element of the array passed as an argument to the map function

const cube = function (num) {
  return num ** 3;
};

const numberArray = [1, 2, 3, 4, 5];

console.log(map(cube, numberArray));

/*
You can also define a function based on a condition using a function expression.

This function expression defines a function,myFunction only if arg is greater than 10
*/

const arg = 12;
let myFunction;

if (arg > 10) {
  myFunction = function () {
    return "Hello";
  };
}
console.log(myFunction());

/*
A method is a function that is a property of an object.*/
