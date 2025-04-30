// Take an array of numbers and create a new array containing the square roots of the numbers in the first array using the map() method.

const numbers = [9, 25, 49];
const squareRoots = numbers.map((num) => Math.sqrt(num));

console.log(squareRoots); // [3, 5, 7]

console.log(numbers); // [9, 25, 49] because map() does not mutate the original array
