/*
Task 1: Arrow Functions
1. Create an array of numbers and use the `map` function with an arrow function to square each
element in the array.
2. Write a function that takes an array of strings and uses the `filter` function with an arrow
function to return only strings with more than 5 characters.
*/

const numbers = [2, 4, 6];
console.log(numbers.map((element) => element ** 2));

function filterStrings(arrayOfStrings) {
  return arrayOfStrings.filter((string) => string.length > 5);
}

const array = ["dog", "puppies", "colors", "timer"];
console.log(filterStrings(array)); // [ 'puppies', 'colors' ]

/*
Task 2: Destructuring
3. Given the object `person` with properties `name` and `age`, use destructuring to extract these
properties into individual variables.
4. Create a function that takes an object as a parameter and uses destructuring to extract and
log specific properties.
*/

const person = {
  name: "Alice",
  age: 50,
};

const { name, age } = person;
console.log(name, age);

function extractProperties(object) {
  const { key1, key2 } = object;

  console.log(`Key1: ${key1}, Key2: ${key2}`);
}

/*
Task 3: Template Literals
5. Write a function that takes a person's name and age and uses template literals to create a
sentence that introduces the person.
6. Create an array of objects with information about books (title, author, year). Write a function
that uses template literals to log information about each book in the array.
*/

function intro(name, age) {
  return `Hello my name is ${name} and I am ${age} years old.`;
}
console.log(intro("Alice", 50));

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
];

function logBookInfo(arrayOfBooks) {
  for (const bookObj of arrayOfBooks) {
    console.log(
      `Title: ${bookObj.title}, Author: ${bookObj.author}, Year: ${bookObj.year}`
    );
  }
}
logBookInfo(books);

/*
Task 4: Spread and Rest Operators
7. Use the spread operator to concatenate two arrays into a new array.
8. Write a function that takes multiple arguments and uses the rest operator to collect them into
an array.
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

function collectArguments(...rest) {
  return rest;
}
console.log(collectArguments(1, 2, 3));

/*Task 5: Classes and Inheritance
9. Create a class `Animal` with properties `name` and `sound`. Extend this class to create a
subclass `Bird` with an additional property `canFly`.
10. Write a function that takes an array of objects representing shapes (circle, square) and uses
classes and inheritance to calculate and log the area of each shape.
*/

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

class Bird extends Animal {
  constructor(name, sound, canFly) {
    super(name, sound);
    this.canFly = canFly;
  }
}

const shapes = [
  {
    type: "circle",
    radius: 5,
  },
  {
    type: "square",
    sideLength: 4,
  },
];

class Shape {
  constructor(type) {
    this.type = type;
  }
}

class Circle extends Shape {
  constructor(type, radius) {
    super(type);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(type, sideLength) {
    super(type);
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength ** 2;
  }
}

function calculateAreaOfShapes(arrayOfShapes) {
  for (let shape of arrayOfShapes) {
    if (shape.type === "circle") {
      const circle = new Circle(shape.type, shape.radius);
      console.log(`Area of ${shape.type}: ${circle.calculateArea()}`);
    } else if (shape.type === "square") {
      const square = new Square(shape.type, shape.sideLength);
      console.log(`Area of ${shape.type}: ${square.calculateArea()}`);
    }
  }
}

calculateAreaOfShapes(shapes);

/*
Task 6: Promises
11. Create a promise that resolves after a delay of 3 seconds and logs a success message.
12. Write a function that uses promises to fetch data from an API and log the result.
*/

new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 3000);
}).then(console.log);

new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => resolve(data));
}).then(console.log);

/*
Task 7: Async/Await
13. Refactor the promise example from task 11 to use async/await.
14. Create an async function that fetches data from two different APIs and returns the combined
result.
*/

async function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 3000);
  });
}

async function fetchData() {
  const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");

  const data1 = await response1.json();
  const data2 = await response2.json();

  return [data1, data2];
}

fetchData().then(console.log);

/*
Task 8: Modules
15. Create a module that exports a function to calculate the area of a rectangle.
16. Import and use the module function in another file to calculate the area of a rectangle.
*/

// module1.mjs
export function areaOfARectangle(width, height) {
  return width * height;
}

// module2.mjs
import { areaOfARectangle } from "./module1.mjs";

console.log(areaOfARectangle(2, 4));
