//use flat() method instead of reduce
const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// when using reduce to flatten an array of arrays, the code can be simplified by using the flat() method.
const flattenedArray = arrayOfArrays.reduce(
  (accumulator, currentArray) => accumulator.concat(currentArray),
  []
);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// when using flat()
const newArr = arrayOfArrays.flat();
console.log(newArr);
