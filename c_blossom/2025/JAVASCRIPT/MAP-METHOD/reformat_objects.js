// use map() to reformat objects in an array
// Take an array of objects, create a new array that contains the reformatted objects using the map() method.
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const newArray = kvArray.map((object) => ({ [object.key]: object.value }));

console.log(newArray);
