/*
The result is passed through the chain of .then handlers

Every call to the .then method returns a promise. This is why we are able to call another .then method on that promise.
This is called promise chaining.

When a .then handler returns a value, it will become the result of the promise .then returns.
Hence the next .then is called with that value.
*/

new Promise((resolve, reject) => {
  /*The initial promise resolves in one second so promise.result = 1
   */

  setTimeout(() => resolve(1), 1000);
})
  .then((value) => {
    /*
    This .then handler receives 1 so it logs 1.
    This handler doubles the value and returns it.
    The returned value is wrapped in a promise that resolves with 2 by the .then method.
    */
    console.log(value); // 1
    return value * 2;
  })
  .then((result) => {
    /*
    This .then handler receives 2.
    So it logs 2.
    It doubles the value and returns it.
    The returned value is wrapped in a promise that resolves with 4 by the .then method.
    */
    console.log(result);
    return result * 2;
  })
  .then((value) => {
    /*
    This handler receives 4, hence logs 4.
    It doubles the value and returns it.
    The returned value is wrapped in a promise that resolves with 8 by the .then method.
    */
    console.log(value);
    return value * 2;
  });
