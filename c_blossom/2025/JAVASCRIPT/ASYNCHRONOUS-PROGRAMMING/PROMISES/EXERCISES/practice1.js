// What is the output of this code? 1
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000); // ignored
});

promise.then(console.log); // 1 because only the first call to resolve or reject is considered. Further calls are ignored.

let user1 = "Abby";
