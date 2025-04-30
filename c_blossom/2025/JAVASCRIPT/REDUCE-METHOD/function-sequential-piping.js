/*
pipe function takes a sequence of functions and returns a new function.

when the new function is called with an argument, the sequence of functions are called in order, with each function receiving the return value of the previous function.
*/

const pipe =
  /* accepts a list of functions*/


    (...functions) =>
    /* returns a function that takes an initial value */ (initialValue) =>
      /* iterate over the list of functions */ functions.reduce(
        (accumulator, currentFunc) =>
          /* pass the accumulated value to each function */ currentFunc(
            accumulator
          ),
        initialValue
      );

// create a pipeline using these functions
const multiplyBy2 = (x) => x * 2;

const add3 = (x) => x + 3;

const square = (x) => x ** 2;

const newFunc = pipe(multiplyBy2, add3, square); // returns a new function

console.log(newFunc(2));
