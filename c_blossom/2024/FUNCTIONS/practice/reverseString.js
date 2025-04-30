/*
Write a function `reverseString` that takes a string as input and returns its reverse.
*/

function reverseString(str) {
  let reversedStr = "";
  let index = str.length - 1;

  /*
	iterate over str from the last character to the first character
	and concatenate each character to reversedStr
	*/

  while (index >= 0) {
    reversedStr += str.at(index);

    index--;
  }

  return reversedStr;
}

console.log(reverseString("hello")); // "olleh"
