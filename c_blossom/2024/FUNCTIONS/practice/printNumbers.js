/*
3: Loops
a. Write a function called `printNumbers` that takes a number `n` as input and prints all the
numbers from `1` to `n` in the console.
*/

function printNumbers(n) {
  let numbers = "";
  let i = 1;
  while (i <= n) {
    if (i === 1) {
      numbers += i;
    } else {
      numbers = numbers + " " + i;
    }
    i++;
  }
  console.log(numbers);
}

printNumbers(10); // 12345678910
