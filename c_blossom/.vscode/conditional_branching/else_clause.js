// if statement contains an optional else clause
// this clause executes when the condition is falsy.

let answer = prompt("What is the capital of Denmark?", "");

if (answer === "Copenhagen") {
  alert("Correct!");
} else {
  // This executes if the answer is anything other than "Copenhagen"
  alert("Incorrect!");
}
