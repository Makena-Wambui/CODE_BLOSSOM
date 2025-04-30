// Use Set and Array.from to remove duplicates in an array instead of using reduce

const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const unique = array.reduce(
  (
    accumulator,
    currentValue /*check if accumulator contains the currentValue
if it does, return accumulator as it is. 
otherwise return accumulator with the current value
*/
  ) =>
    accumulator.includes(currentValue)
      ? accumulator
      : [...accumulator, currentValue],
  []
);

console.log(unique);

// Use Set and Array.from() instead
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray);
