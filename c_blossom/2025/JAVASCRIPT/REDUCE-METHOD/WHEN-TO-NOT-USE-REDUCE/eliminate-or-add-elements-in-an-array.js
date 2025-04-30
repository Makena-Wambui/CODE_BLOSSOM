// Use flatMap()

const array = [4, 9, 15, 21, 25, 36, -5, 38, 49, 50];

const roots = array.reduce((accumulator, currentValue) => {
  if (currentValue < 0) {
    return accumulator;
  }

  // find the square root of the current value
  const squareRoot = Math.sqrt(currentValue);

  if (Number.isInteger(squareRoot)) {
    return [...accumulator, squareRoot, squareRoot];
  }

  return [...accumulator, currentValue];
}, []);

console.log(roots);

// Using flatMap()

const roots2 = array.flatMap((currentValue) => {
  if (currentValue < 0) {
    return [];
  }

  const squareRoot = Math.sqrt(currentValue);

  if (Number.isInteger(squareRoot)) {
    return [squareRoot, squareRoot];
  }

  return [currentValue];
});

console.log(roots2);

// to eliminate elements from an array, use filter()
const arr = [2, 3, 6, 9, 7, 8, 15, 20];
const newArr = arr.filter((x) => x % 3 === 0);
console.log(newArr);
