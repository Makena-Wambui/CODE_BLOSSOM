/*
b. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current
number is odd or even, and displays a message on the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
*/

function checkIfOddOrEven() {
  for (let i = 0; i <= 15; i++) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
  }
}

checkIfOddOrEven();

/*
c.Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print
"Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both
three and five print "FizzBuzz".
*/

function fizzBuzz() {
  let i;

  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}
