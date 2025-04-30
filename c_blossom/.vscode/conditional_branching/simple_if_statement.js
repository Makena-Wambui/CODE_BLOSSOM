// We may want to do different actions based on different conditions.

// We can use if statement to do that or conditional(ternary/question mark) operator.

/*
If evalutes a condition in parentheses.
If the result is true, the code block in curly braces is executed
*/

// Example

let answer = prompt("Who is the president of the USA?", "");

if (answer === "Joe Biden") {
  alert("Correct!");
}

// In the above ex, the condition in the parentheses is just a simple comparison.
// The condition is true if the user enters 'Joe Biden'.
// In that case, the code block in curly braces is executed and the message 'Correct!' is shown.
// If the user enters something else, the condition is false and the code block is skipped.
// The condition can even be more complex.
