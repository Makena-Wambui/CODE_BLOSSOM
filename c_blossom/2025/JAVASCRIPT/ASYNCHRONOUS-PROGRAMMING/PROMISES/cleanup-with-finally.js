/*
Just like there is a finally clause in a regular try catch block, there is finally in promises.

The call .finally(f) means f will always run when the promise is settled, regardless of the outcome.
It does not matter if the promise is resolved or rejected.

With finally we can set up a handler for performing cleanup or finalizing after the previous operations are done.
    - close loading indicators
    - close no longer needed resources/connections
    - clean up after the process is completed
*/

new Promise((resolve, reject) => {
  setTimeout(() => resolve("done1"), 1000);
})
  .finally(() => console.log("Promise is settled")) // runs when the promise is settled
  .then(
    (value) => console.log(value),
    (e) => console.error(e)
  );

new Promise((resolve, reject) => {
  setTimeout(() => resolve("done2"), 2000);
})
  .then(
    (value) => console.log(value),
    (e) => console.error(e)
  )
  .finally(() => console.log("Another Promise is settled"));

/*
  POINTS TO NOTE:
  1. The finally handler has no arguments. In finally, we do not know whetehr the promise is resolved or rejected. Our task is to perform general finalizing procedures.
    The promise outcome is handled by the next handler 

  2. The finally handler passes the passes the result or error to the next suitable handler.
  */

new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 5000);
})
  .finally(() => console.log("Settled"))
  .then(
    (value) => console.log(value),
    (err) => console.error(err)
  );
new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Error Encountered")), 10000);
})
  .finally(() => console.log("It is settled."))
  .catch(console.error);

new Promise((resolve, reject) => {
  throw new Error(`Error Thrown`);
})
  .finally(() => console.log("It is also settled."))
  .catch(console.error);

/*
A finally handler should not return anything. If it does it is silently ignored.
EXCEPT in the scenario where the handler throws an error.
This error goes to the next suitable handler, instead of any previous outcome.
*/

new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("New Error!")), 200);
})
  .finally(() => {
    throw new Error("Error thrown in Finally");
  })
  .catch(console.error); // Error: Error thrown in Finally

new Promise((resolve, reject) => {
  resolve(`Immediate resolve`);
})
  .finally(() => {
    throw new Error(`Testing...`);
  })
  .then(console.log, console.error); // Error: Testing...
