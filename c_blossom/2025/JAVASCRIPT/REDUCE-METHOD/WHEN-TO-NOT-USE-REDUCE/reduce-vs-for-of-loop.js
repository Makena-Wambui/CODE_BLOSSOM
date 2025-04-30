// reduce is equivalent to a for...of loop.
// However instead of mutating the variable in the upper scope, a new value is returned for each iteration.

const array = [1, 2, 3, 4, 5];
const initialValue = 0;

const arr = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

//console.log(arr); // 15

// The above code is equivalent to the following for...of loop:
let value = initialValue;

for (const element of array) {
  value += element;
  console.log(value);
}
