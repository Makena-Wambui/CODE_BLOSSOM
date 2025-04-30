/*
Task 3: Template Literals
5. Write a function that takes a person's name and age and uses template literals to create a
sentence that introduces the person.
6. Create an array of objects with information about books (title, author, year). Write a function
that uses template literals to log information about each book in the array.
*/

function introduction(myName, age) {
  return `Hello my name is ${myName} and I am ${age} years old.`;
}

console.log(introduction("Alice", 30));

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

function bookInformation(array) {
  for (const object of array) {
    console.log(
      `Title: ${object.title}, Author: ${object.author}, Year: ${object.year}`
    );
  }
}
bookInformation(books);
