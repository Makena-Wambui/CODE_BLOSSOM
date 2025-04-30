/*
Variables are used to store information that Javascript applications need to work with.

Variables are named storage for data.

You can use let to create or declare a variable.
*/

let message;

// We put data into this container using the assignment operator.

message = "Hello";

// We can now access the string using the variable name
console.log("Message - ", message);

// You can combine the variable declaration and assignment in one line
let name = "Titan";

// you can also declare and assign multiple variables in one line
let nickName = "skullcrusher",
  weaknesses = "water",
  points = 1000;

// We can also change variable values as many times as we want
message = "Good day";
console.log("Message - ", message);

// You can declare two variables and copy data from one into another.
let person = "James";
let firstName;

firstName = person;
console.log(person, firstName);

/*
 Redeclaration leads to an error 
let school = "Grace Park";
let school = "St Mary's";

So declare a variable once. Then refer to it henceforth by its name without let.
*/
