// the function keyword can be used to define a function inside an expression

// Other ways to define a function are: function declaration, arrow function, and function constructor

const getArea = function (length, width) {
  return length * width;
};

console.log(getArea(3, 2));

/*
SYNTAX:

function (param0) {
    statements
}

function (param0, param1) {
    statements
}

function (param0, param1, ...... paramN) {
    statements
}

function name (param0) {
    statements
}

function name (param0, param1) {
    statements
}

function name (param0, param1, ...... paramN) {
    statements
}


name: the name of the function.
      can be omitted, in which case the function is anonymous.
      name of function is only local to the function body.

paramN: name of the parameters to be passed to the function.
        can be omitted, in which case the function will not accept any parameters.

statements: the statements to be executed by the function.
            can be omitted, in which case the function will not do anything.
            make up the function body.


A function expression has very similar syntax to a function declaration.
The main difference is the function name, which can be omitted in a function expression to create an anonymous function.

A function expression can be used as IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.

*/
