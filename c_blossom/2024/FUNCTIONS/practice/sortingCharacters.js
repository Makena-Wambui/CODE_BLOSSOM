/*
c.Write a function that returns a string that has letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/

/*
let str = "webmaster";
str = str.split("");
console.log(str);
*/

console.log("a" > "B");
console.log("a" < "b");

function sortString(str) {
  // First we split the string into an array of characters
  // webmaster => ['w', 'e', 'b', 'm', 'a', 's', 't', 'e', 'r']
  str = str.split("");

  // Then we sort the array of characters
  // ['w', 'e', 'b', 'm', 'a', 's', 't', 'e', 'r'] => ['a', 'b', 'e', 'e', 'm', 'r', 's', 't', 'w']
  str = str.sort();

  // Finally we join the array of characters into a string
  // ['a', 'b', 'e', 'e', 'm', 'r', 's', 't', 'w'] => 'abeemrstw'
  str = str.join("");

  return str;
}

console.log(sortString("webmaster")); // 'abeemrstw'

function sortStrWithBubbleSort(str) {
  // Split the str into an array of characters
  str = str.split(""); // ['w', 'e', 'b', 'm', 'a', 's', 't', 'e', 'r']

  // Use a for loop to iterate through the array of characters ie the outer for loop represents the number of passes
  for (let i = 0; i < str.length; i++) {
    // An inner for loop to compare each character with the next character
    for (let j = 1; j < str.length - i; j++) {
      // Compare the character at j with the previous character at j - 1
      if (str.at(j) < str.at(j - 1)) {
        // If the character at j is less than the character at j - 1, swap the characters
        // Use a temporary variable to store the character at j
        let temp = str.at(j);
        // Assign the character at j - 1 to the character at j
        str[j] = str[j - 1];
        // Assign the character at j to the character at j - 1
        str[j - 1] = temp;
      }
    }
    // After each pass, the smallest character is placed at the beginning of the array
  }
  // Join the array of characters into a string
  str = str.join("");
  return str;
}
console.log(sortStrWithBubbleSort("webmaster")); // 'abeemrstw'
