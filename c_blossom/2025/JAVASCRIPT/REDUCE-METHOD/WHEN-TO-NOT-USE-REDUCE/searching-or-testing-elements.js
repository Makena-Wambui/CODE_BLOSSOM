// searching for elements or testing if elements satisfy a condition.
// Use find() or findIndex(), some() or every() instead of reduce
// They have the additional benefit of stopping the iteration once the condition is met. They return once the result is certain, without iterating the entire array.

const numbers = [2, 4, 7, 9, 11, 13, 15, 16, 19];

const even = numbers.reduce(
  (accumulator, currentValue) => accumulator && currentValue % 2 === 0,
  true
);

console.log(even);

// Use every() instead to check if all elements are even
const allEven = numbers.every((num) => {
  num % 2 === 0;
});
console.log(allEven); // false

// Use some() to check if there is at least one even number
const someEven = numbers.some((num) => num % 2 === 0);
console.log(someEven); // true

// find the first even number in the array
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven);

// find the index of the first even number in the array
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex);
