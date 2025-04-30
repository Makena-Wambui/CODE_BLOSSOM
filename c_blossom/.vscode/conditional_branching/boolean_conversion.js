/*
if evaluates the expression in the ()
then converts theresult to a boolean.

NB:
0, "", null, undefined, NaN and false are all falsy values

Other values are truthy values
*/

// Therefore this code block would never execute.
if (0) {
  // This code block would never execute
  // because 0 is a falsy value
}

// The code block below would always execute because 1 is a truthy value
if (1) {
}

// The code block below would always execute because "hello" is a truthy value
if ("hello") {
}

// The code block below would always execute because {} is a truthy value
if ({}) {
}

// You can pass a preevaluated boolean value to if.
let year = 2024;

/*
Check if year is a leap year
A leap year is exactly divisible by 4 
EXCEPT for years exactly divisible by 100(so these are not leap years)
Centurial years are leap years if they are exactly divisible by 400.
So 1600 and 2000 are leap years but 1700, 1800, 1900 are not.
*/

let condition = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
if (condition) {
  console.log(`${year} is a leap year.`); // 2024 is a leap year.
}
