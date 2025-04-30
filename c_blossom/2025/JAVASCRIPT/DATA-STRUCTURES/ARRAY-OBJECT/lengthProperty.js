/*
Some of the built in array methods like join(), slice, and indexOf take into account the value of the array's length property when they are called.

Other methods like push and splice result into updates to the array's length property.
*/

const fruits = [];
console.log(fruits.length); // 0
fruits.push("apple", "banana", "peach");
console.log(fruits.length); // 3

/*
When setting a property on a JS array, ie adding a new element,
but using an index number that is bigger than the current length of the array,
the JS engine will update the array's length property accordingly, ie increase its size to fit the new element.
*/

fruits[6] = "mango";
console.log(fruits); // [ 'apple', 'banana', 'peach', <3 empty items>, 'mango' ]
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log(fruits[6]);
console.log(Object.keys(fruits));
console.log(fruits.length);

/*
If you increase the length of the array, ie increase length property, will extend the array by adding empty slots that do not contain any values, not even undefined.
*/

fruits.length = 10;
console.log(fruits); // [ 'apple', 'banana', 'peach', <3 empty items>, 'mango', <4 empty items> ]
console.log(Object.keys(fruits)); // [ '0', '1', '2', '6' ]
console.log(fruits.length); // 10
console.log(fruits[7]); // undefined

/*
If you decrease the length of the array, ie decrease length property, then you delete elements from the array.
*/
fruits.length = 3;
console.log(fruits); // [ 'apple', 'banana', 'peach' ]
console.log(Object.keys(fruits)); // [ '0', '1', '2' ]
console.log(fruits.length); // 3
