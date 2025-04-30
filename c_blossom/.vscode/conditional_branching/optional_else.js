// To test several variants of a condition, we can use an else if clause.

let year = prompt("In what year did Kenya attain independence?", "");

if (year < 1963) {
  // JS first checks that the year is less than 1963
  // If it is, it executes the code block below
  // If not, ie it is falsy, it checks the next condition in the else if clause
  alert("Too early!");
} else if (year > 1963) {
  // JS checks if the year is greater than 1963
  // If it is, it executes the code block below
  // If not, ie it is falsy, it executes the else block
  // You can have more else if clauses
  alert("Too late!");
} else if (year == 1963) {
  // If the year is not less than 1963 and not greater than 1963
  // This clause is optional
  alert("Correct!");
}
