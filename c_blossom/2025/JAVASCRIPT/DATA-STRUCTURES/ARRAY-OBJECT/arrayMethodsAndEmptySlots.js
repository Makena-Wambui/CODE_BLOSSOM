/*
Array methods have different behaviors when they encounter empty slots in sparse arrays.

Genarally older methods like forEach treat empty slots differently from slots that contain undefined.

Methods that treat empty slots in a special way include: 
- forEach
- filter
- reduce
- every
- some
- find
- findIndex
- copyWithin
- fill
- concat
- flat
- flatMap
- map
- slice
- splice

Iteration methods such as forEach do not visit empty slots at all.

Other methods such as concat, copyWithin,etc, preserve the empty slots when doing the copying so in the end the new array is still a sparse array.

*/

const colors = ["red", "blue", "purple"];

colors[5] = "yellow";

console.log(colors); // [ 'red', 'blue', 'purple', <2 empty items>, 'yellow' ]

colors.forEach((color, position) =>
  console.log(`The color at index ${position} is ${color}`)
);

console.log(colors.reverse());

console.log(colors);

colors[4] = undefined;
console.log(colors);
colors.forEach((color, position) =>
  console.log(`The color at index ${position} is ${color}`)
);

/*
Newer methods like keys() do not trat empty slots specially. 
Rather they treat these slots as if they contain undefined elements.
Other methods that do this include:
- keys
- values
- entries
- join
- with
- toReversed
- toSorted etc
*/

const cities = ["New York", "London", "Paris"];
cities[5] = "Tokyo";
console.log(cities); // [ 'New York', 'London', 'Paris', <2 empty items>, 'Tokyo' ]
const iterator = cities.keys();
console.log(iterator);
