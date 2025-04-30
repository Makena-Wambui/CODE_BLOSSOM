/*
Built in objects are bjects built into the JS language. They are the foundation of the language and are always available to you. So you do not need to create them before using them.

For example, the console object.

You can build your own objects.

Built in objects are full of useful functionality.

If you want to perform more complex mathematical operations than just simple arithmetic,
you can use the Math object.

Objects have methods.

For example, the random() method of the built in Math object:
*/

console.log(Math.random()); // returns a random number between 0(inclusive) and 1(exclusive)

// Generate a random number btwn 0 and 50.
// To get whole numbers only, use Math.floor() method, which rounds down decimal numbers to the nearest whole number.
let number = Math.random() * 50;
console.log(Math.floor(number));

console.log(Math.ceil(2.9)); // ceil() method rounds up decimal numbers to the nearest whole number.
console.log(Math.ceil(2.4));

// A method of the built in Number object that checks wheher a number is an integer.
console.log(Number.isInteger(2));
