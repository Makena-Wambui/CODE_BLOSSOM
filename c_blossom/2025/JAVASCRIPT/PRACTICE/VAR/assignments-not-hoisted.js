function sayHello() {
  console.log(greeting);

  var greeting = "Hello";
}

sayHello(); // undefined

/*
the var declaration is hoisted to the start of function execution.

the assignment works at the place it appears.

so the above code works like this:

function sayHello () {
    var greeting;

    console.log(greeting) this is undefined

    var greeting = 'Hello' greeting is assigned hello when execution reaches it.
}

sayHello()

Since var declarations are hoisted, they can be referenced at any point in our code.

However, they are undefined until they are assigned.
*/
