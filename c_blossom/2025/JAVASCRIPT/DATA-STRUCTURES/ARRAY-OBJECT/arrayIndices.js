/*
JS syntax require that properties that begin with a digit to be accessed using bracket notation, not dot notation.

You can also quote the array index so its like this: arr['0'] instead of arr[0]. Not usually necessary, but it can be useful in some cases.
*/

const arr = [1, "two", 3, 4, 5];
//console.log(arr.0);
console.log(arr[0]);
console.log(arr["0"]);

const years = [2015, 2016, 2017, 2018, 2019];

// The 2 in years[2] is converted to a string, so it is the same as years["2"], by an implicit toString() conversion.
// Thus '2' is the same as 2. ie years[2] is the same as years['2']
// However years['2'] is not the same as years['02']
console.log(years[2]);
console.log(years["2"]);
console.log(years["02"]); // undefined because '02' is treated as an object property, not an array index.
console.log(years[2] !== years["02"]);
