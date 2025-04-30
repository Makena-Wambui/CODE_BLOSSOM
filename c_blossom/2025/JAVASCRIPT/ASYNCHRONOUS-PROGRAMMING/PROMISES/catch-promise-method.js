/*
If we are interested only in errors, we can have either of these approaches:

.then(null, errorHandlingFunction)

OR

.catch(errorHandlingFunction)
*/

let promise = new Promise((resolve, reject) => {
  setTimeout(reject(new Error("Rejected")), 1000);
});

// promise.catch(console.error);

promise.then(null, console.error);
/*
The .catch method is a shorthand for .then(null, errorHandlingFunction).
*/
