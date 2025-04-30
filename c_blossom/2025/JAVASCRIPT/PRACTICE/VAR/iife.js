// immediately invoked function expression

var message = "Hi";

(function () {
  var message = "Hello";

  console.log(message);
})();

// so a function expression is created and immediately called. the code exceutes right away and has its own private variables.

/*
the function expression is wrapped in (function () {}) because when javascript engine encounters the keyword function,
it understands it as the start of a function declaration.
But a function declaration must have a name, so the code below, without () will give an error.
*/

function () {
    var message = 'Hey'
    console.log(message)
}();

// even if we add a name: it wont work because function declarations should not be called immediately
function sayHey () {
    var message = 'Hey'
    console.log(message)
}();

// the () around the function are used to trick the engine into thinking that the function is created in the context of another expression, and hence is a function expression.
// thus it needs no name, and can be called immediately.


// Other ways to show that we mean a function expression:
(function () {
  console.log(`Parentheses around the function`);
})();

(function () {
  
    console.log(`Parentheses around the whole thing`);
}());


!function () {
    console.log(`Bitwise Not Operator starts the expression`)
}
+function () {
    console.log(`Unary plus starts the expression`)
}




