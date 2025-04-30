/*
Functions can refer to and call themselves.

There are three ways in which functions can refer to themselves:
    1. By using the function name
    2. By using the arguments.callee property
    3. By using the variable that the function is assigned to
*/

const foo = function bar() {
  /*
    Ways in which the function can refer to itself
    bar();
    foo();
    arguments.callee();
    */
};

/*
A recursive function is a function that calls itself.

Recursion is analogous to a loop

They both execute the same code multiple times;
Both need a condition that terminates the repetition to avoid an infinite loop/infinite recursion
*/

// Loop example
let x = 0;

while (x < 10) {
  // x < 10 is the condition that terminates the loop
  x++;
  console.log(x);
}

/*
The above loop can be convereted into a recursive function declaration,
which will be followed by a call to that function.
*/

function recursiveFunc(x) {
  /* our exit condition */
  if (!(x < 10)) {
    return;
  }
  console.log(x);
  x++;
  recursiveFunc(x);
}
recursiveFunc(0);

/*
Recursive functions can be more complex than simple iterative loops.

For ex;
Get all the nodes of a tree structure like the DOM tree is easier with recursion than with a loop.
*/

function getNodes(node) {
  /* exit condition */
  if (!node) {
    return;
  }

  // iterate over the node's children
  for (let i = 0; i < node.childNodes.length; i++) {
    // call the function recursively on each child node
    // each recursive call itself makes more recursive calls
    getNodes(node.childNodes[i]);
  }
}

/*
you can convert any recursive algo to a non recursive one,
but the logic is often more complex and harder to understand.
And you need to use a stack to keep track of the function calls.

Recursion itself uses a stack - a function call stack.
The following example demonstrates how a stack is used in recursion.
*/

function baz(param) {
  /* base case or exit condition */
  if (param === 0) {
    return;
  }

  console.log(`begin: ${param}`);

  baz(param - 1);

  console.log(`end: ${param}`);
}

baz(5);

/*
OUTPUT:
begin: 5
begin: 4
begin: 3
begin: 2
begin: 1
end: 1
end: 2
end: 3
end: 4
end: 5
*/

function reverseString(str) {
  let index = str.length - 1;
  let reversedString = "";
  while (index >= 0) {
    reversedString += str[index];
    index--;
  }
  return reversedString;
}

let myStr = "Hello";
console.log(reverseString(myStr)); // olleH
