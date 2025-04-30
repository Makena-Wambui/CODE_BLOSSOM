// use const instead of let to declare unchanging or constant variables.

const myBirthday = "1.10.1965";

// Variables declared using const keyword are called constants.
// You can not reassign them.
// Trying to do so raises an error.

/*
myBirthday = "2.10.1965"; // Error: Assignment to constant variable.
console.log(myBirthday);
*/
/*
const only forbids reassignments.

It does not forbid mutations of objects and arrays.

Properties of objects and elements of arrays can be changed.

Propertes of oconstant objects are not protected.

*/

const obj = { key: "value" };
// You can change the value of its properties.
obj.key = "new value";
console.log(obj);

// Array elements are not protected.
const myArr = ["Apple", "Banana", "Cherry"];
myArr[0] = "Orange";
console.log(myArr);
myArr.push("Mango");
console.log(myArr);
