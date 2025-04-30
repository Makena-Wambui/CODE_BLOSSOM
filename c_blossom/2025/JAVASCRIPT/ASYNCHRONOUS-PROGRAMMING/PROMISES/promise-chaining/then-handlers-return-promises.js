/*
A handler used in .then(handler) may create and return a promise

Further handlers wait until that promise settles, then get its result.

Returning promises helps us build chains of asynchronous actions.
*/

new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 2000);
    });
  })
  .then((result) => {
    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result); // 4
  });
