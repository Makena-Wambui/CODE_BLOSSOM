/*

Defining a function does not execute it.

Defining a function names the function, and specifies what to do when the function is called.

When you call the function, the specified actions are performed using the indicated parameters.
*/

// This is how to call the function square after you define it.

function square(number) {
  return number * number;
}

square(5); // 25

/*
So we have called the function square with an argument of 5.
The statements within the function are executed.
The value returned by the function is 25.

Functions must be in scope when they are called.

The function declaration can be hoisted; ie it can be called before it is defined.

Arguments passed to a function are not ltd to strings and numbers.

You can pass objects to a function.

A function can call itself. This is called recursion.

    For example, a function that computes factorials recursively:
*/

function fact(myNumber) {
  return myNumber < 2 ? 1 : myNumber * fact(myNumber - 1);
}

console.log(fact(0));
console.log(fact(1));
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));

/*
Functions are objects.

So they have properties and methods such as:
    call() - calls a function with a given this value and arguments provided individually.
    apply() - calls a function with a given this value and arguments provided as an array.

    For example:
*/

function myFunction(a, b) {
  return a * b;
}

const myArray = [10, 2];
console.log(myFunction.apply(null, myArray));
console.log(myFunction.call(null, 10, 2));
