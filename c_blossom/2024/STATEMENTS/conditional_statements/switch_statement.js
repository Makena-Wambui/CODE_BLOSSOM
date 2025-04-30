/*
Switch statement evaluates an expression;

Then matches the value of the expression against a series of case clauses;

Then executes statements after the first case clause that matches the value of the expression;
until a break statement is encountered;

If no case clause matches the expression's value;
the default clause of the switch statement is executed;
*/

// const fruit = "Coconuts";
// const fruit = "Bananas";
const fruit = "Grapefruit";

switch (fruit) {
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
    break;

  case "Grapefruit":
    console.log("Grapefruit cost 2 dollars per kg");
    break;

  case "Mangoes":
    console.log("Mangoes cost 2 dollars per kg");
    break;

  case "Grapefruit":
    break;

  case "Coconuts":
    console.log("Coconuts cost 3 dollars per kg");
  //break;
  /*
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
  */
}

/*
Default clause is optional

Executed only if the value of the expression does not match any case clause

Can be placed anywhere in the switch statement

Can only be one default clause in a switch statement

If no default clause is found, execution continues to the statements after the switch statement
*/

/*
The case clause expressions are only evaluated when necessary.

If a match has been found, subsequent case clauses are not evaluated, even when visited by fall through.
*/
switch (undefined) {
  // The value of this switch expression is undefined.

  case console.log(1):
  // This case is evaluated, 1 is logged to the console, and undefined is returned by the call to console.log.
  // This matches the value of the switch expression, so the following case clauses are not evaluated.
  case console.log(2):
}

/*
If you omit break after the first matching case clause, the subsequent case clauses including the default clause, 
are executed until a break is encountered.

This is called fall through.
*/

const num = 0;

switch (num) {
  case -1:
    console.log(-1);
    break;

  case 0:
    console.log(0);
  // break; No break statement so execution falls through to the next case clause

  case 1:
    console.log(1);
  // break; Same here, no break statement so execution falls through to the next clause

  default:
    console.log("default");
    break; // Break encountered so execution stops, this break is unnecessary if default is the last case clause
}

/*
case and default clauses are like labels;
meaning they indicate possible places control flow may jump to;

They do not create scopes by themselves;

In the following Example:
The variable message is declared in the first case clause;
and used in the second case clause;
Therefore, you will get a SyntaxError: Identifier 'message' has already been declared, 
because the first const message = "Hi there!"; conflicts with the second const message = "Hello there!";
even though they are within their own separate case clauses;
These two const declarations are within the same block scope created by the switch statement;
*/

/*
const greeting = "Hello";
switch (greeting) {
  case "Hi":
    const message = "Hi there!";
    console.log(message);
    break;

  case "Hello":
    const message = "Hello there!";
    console.log(message);
    break;

  default:
    console.log("Greetings!");
}
*/

/*
When you need to use let or const in a case clause;
wrap it in a block statement,
to create a new block scope.
*/

const greet = "Hello";
switch (greet) {
  case "Hi": {
    const message = "Hi there!";
    console.log(message);
    break;
  }

  case "Hello": {
    const message = "Hello there!";
    console.log(message);
    break;
  }

  default: {
    console.log("Greetings!");
  }
}

const expr = "Bananas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;

  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;

  /*
    This clause is executed because expr evaluates to 'Bananas'
    When break is encountered, the program breaks out of the switch statement,
    and the program executes the statement after the switch statement.

    If break was omitted, execution would fall through to the next case clause.
    */
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
  //break;

  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
  //break;

  case "Coconuts":

  case "Mangoes":
    console.log("Mangoes are $2.00 a pound.");
    break;

  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log(`Is there anything else you'd like?`);

// If no match is found,the default clause is executed, if it exists;
// otherwise, the program continues to the statement after the switch statement.

const number = 10;

switch (number) {
  case 1:
    console.log("One");
    break;

  default:
    console.log("No match found."); // fall through

  case 2:
    console.log("Two"); // fall through
  //break;
}
console.log("Done"); // also executed

/*
Taking advantage of fall through:

Let us take advantage of the fact that if there is no break statement at the end of a case clause,
execution continues to the next case clause,
does not matter if the case clause matches the value of the expression or not.
*/

// All these five values will perform exactly the same action

// const Animal = "Buffalo";
// const Animal = "Antelope";
// const Animal = "Cat";
// const Animal = "Zebra";
const Animal = "T-Rex";

switch (Animal) {
  case "Antelope":

  case "Cat":

  case "Buffalo":

  case "Raccoon":

  case "Zebra":
    console.log("This animal is not extinct");
    break;

  case "T-Rex":

  default:
    console.log("This animal is extinct");
}

/*
in this example:
Depending on the integer provided, you can receive a different output.
*/

const foo = null;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";

  case 1:
    output += "What ";

  case 2:
    output += "Is ";
    output += "Your ";

  case 3:
    output += "Name";
  //console.log(output);
  //break;

  case 4:
    output += "?";
    console.log(output);
    break;

  default:
    output = "Hello!";
    console.log(output);
}

// You can use switch statement as an alternative to if-else chains

// An example of if else chain

if ("fetch" in globalThis) {
  // Use fetch API to fetch a resource
} else if ("XMLHttpRequest" in globalThis) {
  // Use XMLHttpRequest to fetch a resource
} else {
  // fetch a resource with some custom logic
}

// Let us rewrite the abone if..else if..else statement using switch statement
switch (true) {
  case "fetch" in globalThis:
    // Use fetch Api to fetch a resource
    break;

  case "XMLHttpRequest" in globalThis:
    // Use XMLHttpRequest to fetch a resource
    break;

  default:
  // fetch a resource with some custom logic
}

switch (true) {
  case isSquare(shape):
    console.log("The shape is a square");
  //break;

  case isRectangle(shape):
    console.log("The shape is a rectangle");
  //break;

  case isQuadrilateral(shape):
    console.log("The shape is a quadrilateral");
    break;

  case isTriangle(shape):
    console.log("The shape is a triangle");
    break;

  default:
    console.log(
      "The shape is not a square, rectangle, quadrilateral or triangle"
    );
}
