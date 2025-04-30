/*
strings can either be enclosed in single quotes ('...') or double quotes ("...") or backticks (`...`).

A single character enclosed in quotes is also a string.

*/
let newString = `Hello`;
console.log(typeof newString); // string

/*
Backticks allow us to embed any expression in the string by wrapping it in ${...}
*/

function multiply(i, j) {
  let result = i * j;
  return `${i} multiplied by ${j} is ${result}.`;
}

console.log(multiply(2, 3));

/*
Backticks allow strings to span multiple lines.
For example this list of students:
Students:
    1. John
    2. Jane
    3. Peter
    4. Mary
*/
let studentList = `Students:
    1. John
    2. Jane
    3. Peter
    4. Mary
    `;
console.log(studentList);

/*
If you try to use single quotes or double quotes this way you get an error

let movieList = "Movies:
    1. Taken
    2. The GodFather
    3. The Ring
    4. The Outsiders
    ";
console.log(movieList); // Uncaught SyntaxError: Invalid or unexpected token
*/

// Special characters
/*
You can create multiline strings using "" and '' quotes by using a special character called a newline character \n.
This character denotes a line break.
*/

let guestList = "Guests:\n 1. John\n 2. Peter\n 3. Mary\n 4. Jane";
console.log(guestList);

// These two lines are equal.
let greet = "Hello.\nI miss you.";
let greet2 = `Hello.
I miss you.`;
console.log(greet);
console.log(greet2);
console.log(greet === greet2); // true

// Other special characters
/*
\' - single quote
\" - double quote
\` - backtick
\\ - backslash
\t - tab
\b - backspace
\f - form feed
\v - vertical tab
The last three are rarely used.

All special characters start with a backslash \.
The \ is also called an escape character.
This is because it escapes the character that follows it.
*/

// The escape characteris a special character so in order to use a \ within a string we need to escape it with another \.
console.log("The backslash: \\");

// Escaped quotes like \' \" \` are used to insert a quote within a quoted string.
console.log("Hello, I'm Alicia");

// Only the quotes that are the same as the enclosing quotes need to be escaped.
// So the above can be written as:
console.log("Hello, I'm Alicia");
console.log(`Hello, I'm Alicia`);
