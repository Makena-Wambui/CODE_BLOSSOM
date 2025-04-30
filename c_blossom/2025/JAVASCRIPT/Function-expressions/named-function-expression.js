/*
 you may want to refer to the current function inside the function body. In such cases, create named function expressions.

 this name is local only to the function body.
 */

const math = {
  factorial: function factorial(num) {
    console.log(num);

    if (num <= 1) {
      return 1;
    }

    return num * factorial(num - 1);
  },
};

const fact = math.factorial(3);
console.log(fact);

//factorial(3);

// unlike declarations, the names of function expressions are read only just like constants

("use strict");
function myFunc() {
  /* this is a function declaration */
  myFunc = 1;
}

myFunc();

console.log(myFunc);

// we can not do this with function expressions
(function myFunc2() {
  myFunc2 = 1;
})();
