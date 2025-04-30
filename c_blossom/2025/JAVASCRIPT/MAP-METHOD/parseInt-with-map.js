// Most commonly, the callback function is usually invoked with only one argument: the current element being processed

const myArray = ["1", "2", "3"];

// There are functions that also are commonly invoked with one argument, even though they may receive additional optional arguments.
// This may lead to confusing behavior when using map() with such functions.

console.log(myArray.map(parseInt)); // [1, NaN, NaN, NaN, NaN]

/*
parseInt() takes two arguments, the string to be converted and the radix, which is the base in mathematical numeral systems.
The second argument is optional and defaults to 10 if not provided.
The first argument is mandatory.
The callback function of map() is invoked with three arguments: the current element, the index, and the array.
parseInt() is usually invoked with one argument, but map() passes three arguments.
The second argument is interpreted as the radix.
The third argument paased to parseInt is ignored.

*/

// First iteration: parseInt("1", 0, ["1", "2", "3"]) -> parseInt("1", 0) -> 1
console.log(parseInt("1", 0)); // 1
console.log(parseInt("1", 10)); // 1

// Second iteration: parseInt("2", 1, ["1", "2", "3"]) -> parseInt("2", 1) -> NaN
console.log(parseInt("2", 1)); // NaN

// Third iteration: parseInt("3", 2, ["1", "2", "3"]) -> parseInt("3", 2) -> NaN
console.log(parseInt("3", 2)); // NaN
console.log(parseInt("0", 2)); // 0
console.log(parseInt("1", 2)); // 1

// You can solve this by defining a function that takes one argument:
console.log(myArray.map((element) => parseInt(element, 0xf)));

// We can use the Number function instaed of parseInt to convert strings to numbers. Number only takes one argument.
myArray.map((x) => Number(x)); // [1, 2, 3])

// OR
myArray.map(Number); // [1, 2, 3]

// Unlike parseInt Number can return a float or a resolved exponential notation
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
["1.1", "2.2e2", "3e300"].map((x) => parseInt(x)); // [1, 2, 3]
