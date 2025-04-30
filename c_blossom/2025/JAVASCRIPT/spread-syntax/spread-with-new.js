// An array can be easily used with the new Keyword and a constructor function using the spread syntax.

const date = [1990, 1, 10];

const newDate = new Date(...date);

console.log(newDate);
