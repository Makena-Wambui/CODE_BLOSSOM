/*
b.Write a function that displays the largest integer among two integers.

*/

function maxInteger(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

console.log(maxInteger(4, 5)); // 5
console.log(maxInteger(10, 3)); // 10

function maxInteger2(arr) {
  // set the biggestInteger to the first element in the array
  let biggestInteger = arr[0];
  let index = 1;

  // iterate through the array starting from the second element using a while loop
  while (index < arr.length) {
    if (arr[index] > biggestInteger) {
      biggestInteger = arr[index];
    }
    index++;
  }
  return biggestInteger;
}

console.log(maxInteger2([-2, 4, 15, 5])); // 15
