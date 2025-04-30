/*
We can add many .then handlers to a single promise.
This is not chaining.
They dont pass the result to each other.
They are independent of each other and process the result of the promise independently.

All .then get the same result from the same promise.
*/

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved"), 200);
});

promise.then((value) => {
  console.log(value);
  return value * 2;
});

promise.then((value) => {
  console.log(value);
  return value * 2;
});

promise.then((value) => {
  console.log(value);
  return value * 2;
});
