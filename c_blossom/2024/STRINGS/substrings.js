// There are ways you can look for a substring within a string.

/*
str.indexOf(substring, pos)

pos is optional

It looks for substring in the string, str.
It starrts from the given position, pos.

If the substring is found, 
this method returns the position of the first occurrence of the substring.

If the substring is not found,
it returns -1.
*/

let string = "Indigo Is a nice color, Isn't it?";
console.log(string.indexOf("Indigo")); // 0
console.log(string.indexOf("indigo")); // -1
console.log(string.indexOf("I")); // 0
console.log(string.indexOf("i")); // 3

// pos allows us to start searching from a particular position.

// For example, in string we want to search for "I" after the first "I" in the string.
console.log(string.indexOf("I", 1));
console.log(string.indexOf("i", 4));
console.log(string.indexOf("Is", 8));

// If interested in all occurences of a substring you can run indexOf in a loop.
// every new call to indexOf will be made with the pos after the old occurence.

let theString = "As sly as a fox, as strong as an ox.";

// what substring are we searching for?
let substr = "as";

// we want all occurences so start from index 0
let index = 0;
let position;

// use an infinite loop
while (true) {
  // find first occurence of substr
  position = theString.indexOf(substr, index);

  // if substring not found, break the loop
  if (position === -1) {
    break;
  }

  // print where substring was found
  console.log(`Found ${substr} at ${position}`);

  // move to the next position from where we found the substring
  index = position + 1;
}

theString = "I scream, you scream, we all scream for ice cream.";

// what substring are we searching for?
substr = "scream";

let start = 0;
let found;

// we want all occurences so start from index 0
while (true) {
  found = theString.indexOf(substr, start);

  if (found === -1) {
    break;
  }

  console.log(`Found ${substr} at ${found}`);

  start = found + 1;
}

/*
There is also a similar method:
str.lastIndexOf(substr, pos)

It does the same thing as str.indexOf(substr, pos), but in reverse order.
It starts searching the tree from the end to the beginning.
*/

console.log(theString.lastIndexOf(substr)); // returns 29 which is the index of the last occurence of "scream" in the string.
let move = theString.length - 1;
while (true) {
  let lastIndex = theString.lastIndexOf(substr, move);

  if (lastIndex === -1) {
    break;
  }
  console.log(`Found ${substr} at ${lastIndex}`);
  move = lastIndex - 1;
}

// Slight inconvenience when using indexOf in an if statement.
theString = "My name is Alicia";
substr = "My";

if (theString.indexOf(substr)) {
  /*
  the substring is at index 0.
  0 is falsy in JavaScript.
  Thus this block never runs.
  */
  console.log(`${substr} has been found in the string`);
}

// How you can write this:
if (theString.indexOf(substr) !== -1) {
  console.log(`${substr} has been found in the string`);
}
