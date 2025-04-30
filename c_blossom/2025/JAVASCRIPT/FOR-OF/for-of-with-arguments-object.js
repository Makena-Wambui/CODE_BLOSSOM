// you can iterate over the arguments object to examine all parameters passed into a function

function foo() {
  for (const param of arguments) {
    console.log(param);
  }
}

foo(1, 2, 3);
foo("a", "b", "c");
