/*
A function definition is also called a function declaration or a function statement.

Consists of the function keyword, followed by:
    - name of the function
    - a list of parameters to the function, enclosed in parentheses and separated by commas
    - JS statements that define the function enclosed in curly brackets, { }

Example:
Definine a function called square;
Takes one parameter, number;
Consists of one statement - which says to return the parameter of the function (number) multiplied by itself.


*/

function square(number) {
  return number * number; // return statement specifies the value returned by the function which is number * number
}

/*
Parameters are passed to functions by value.

If the code within the body of a function assigns a completely new value to a parameter that was passed to the function,
this will not affect the value of the original argument.


When you pass an object as a parameter,
and the function changes that object's properties,
that change will persist outside of the function as well.
*/
function func(myObject) {
  myObject.color = "brown";
}

const myPet = {
  breed: "Golden Retriever",
  age: 5,
  color: "yellow",
};

console.log(myPet.color); // yellow

func(myPet);

console.log(myPet.color); // brown

/*
When you pass an array as a parameter,
and the function changes the array's elements,
that change will persist outside of the function as well.
*/
function myFunc(array) {
  array.push("mango");
}
const myFruits = ["apple", "banana", "cherry"];

console.log(myFruits);

myFunc(myFruits);

console.log(myFruits);
