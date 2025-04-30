/*
A promise object acts as a link between the executor (producing code) and the consuming code, which will receive the result or error.

Consuming functions can be registered using .then and .catch methods.
*/

// SYNTAX FOR .then METHOD:

let promise = new Promise(function (res, rej) {
  // executor code
});

promise.then(
  function (result) {
    /* 
        function that runs when the promise is resolved and receives the result.
    */
  },
  function (err) {
    /* 
        function that runs when the promise is rejected and receives the error.
    */
  }
);

// A reaction to a successfully resolved promise
const promise1 = new Promise((res, rej) => {
  setTimeout(() => res("done"), 2000);
});

promise1.then(
  (result) => console.log(result), // this first function in .then is run by res with the result "done"
  (err) => console.error(err) // this second function in .then is ignored because the promise is resolved
);

// A reaction to a rejected promise
const promise2 = new Promise((res, rej) => {
  rej(new Error("Error!"));
});
promise2.then(
  (result) => console.log(result), // this first function in .then is ignored because the promise is rejected
  (err) => console.error(err) // this second function in .then is run by rej with the error "Error!"
);

// If interested only in successful completions, we can pass only one function argument to .then

const promise3 = new Promise((res, rej) => {
  setTimeout(() => res("done3"), 5000);
});

promise3.then(console.log); // this function is run by res with the result "done3"
