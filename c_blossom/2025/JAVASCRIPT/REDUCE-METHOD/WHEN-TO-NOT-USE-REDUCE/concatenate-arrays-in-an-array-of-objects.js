// to concatenate arrays in an array of objects, use flatMap() intead of reduce()

const array = [
  { name: "Alice", books: ["The Alchemist", "The Little Prince"] },
  { name: "Bob", books: ["The Hobbit", "The Lord of the Rings"] },
  { name: "John", books: ["The Catcher in the Rye", "The Great Gatsby"] },
];

const allBooks = array.reduce(
  (accumulator, currentObj) => [...accumulator, ...currentObj.books],
  []
);

console.log(allBooks);

// Using flatMap()
const allBooks2 = array.flatMap((obj) => obj.books);

console.log(allBooks2);
