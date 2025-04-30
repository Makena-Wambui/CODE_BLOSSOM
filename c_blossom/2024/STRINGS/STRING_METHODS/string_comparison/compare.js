/*
Strings are compared character by character in alphabetical order. The first character of both strings is compared. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We move to the next character and compare it with the next character of the other string. This process continues until the corresponding characters of both strings are different or one string ends.

A lowercase character is always greater than an uppercase character. ie it has a greater ASCII value.
*/

console.log("a" > "J"); // true

// A letter with diacritical mark is greater than the same letter without diacritical mark.
console.log("Ö" > "O");
console.log("Ö" > "Z");

// for instance when sorting country names like "Österreich" and "Zambia", "Österreich" would be placed after "Zambia" because "Ö" is greater than "Z" in ASCII table.

/*
Strings in JS are encoded using UTF-18.
Each character has a corresponding numeric code. The character "A" has the code 65, "B" has the code 66, and so on.

There are methods you can use to get the character that corresponds to a code, and vice versa.
*/

// str.CodePointAt(pos) - returns a decimal number that represents the code for the character at the given position pos.

console.log("A".codePointAt(0)); // 65
console.log(typeof "a".codePointAt(0)); // 97
console.log(typeof "a".codePointAt(0).toString(16));
console.log("a".codePointAt(0).toString(16));
console.log("aB".codePointAt(1));

// To get the character from a code, you can use the method String.fromCodePoint(code).
console.log(String.fromCodePoint(65)); // A
// or provide a hex value
console.log(String.fromCodePoint(0x61)); // a

// Let us make a string of all characters in the Latin alphabet.(65 to 220)

let string = "";
let i = 65;

while (i >= 65 && i <= 220) {
  string += String.fromCodePoint(i);
  i++;
}
console.log(string);
/*
OUTPUT: ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~

¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
*/
// capital letters come first before lowercase letters.
// Letters with diacritical marks come after the normal letters near the end.
// "Ö" > 'b' > 'B'
// Characters are compared by their numeric code.
// Greater code means the character is greater.
// Code for "a" is 97
// code for "A" is 65 thus "a" > "A"

// lets compare two stings "Hello" and "hello"
let str1 = "Hello";
let str2 = "hello";
if (str1 > str2) {
  console.log("The string Hello is greater than hello");
}

if (str2 > str1) {
  console.log("The string hello is greater than Hello");
}

str1 = "hello";
console.log(str1 === str2);
console.log(str1 == str2);

str1 = "apple";
str2 = "banana";
if (str1 > str2) {
  console.log("The string apple is greater than banana");
}
if (str2 > str1) {
  console.log("The string banana is greater than apple");
}

str1 = "APPLE";
str2 = "APPlE";
console.log(str1 < str2);

/*
String comparison is more complex because different languages have different alphabets.

Browser needs to know which language is used in the string to compare them correctly.

Modern browsers support the internalization standard called  ECMA - 402 that provides the Intl object for string comparison.

It also provides a special method called localeCompare that compares strings in different languages.

str.localeCompare(str2)
Returns a number 0 if the strings are equal, -1 if the first string is less than the second, and 1 if the first string is greater than the second.

You can pass two additional args to localeCompare().
1. To specify the language. The default language is the one that the browser is set to.
2. Set up additinal rules like case sensitivity, or like if "a" and "ä" should be treated as the same character.

*/

console.log("Österreich".localeCompare("Zambia")); // -1 because language not specified so default, English is used, where O is less than Z.
console.log("Österreich".localeCompare("Zambia", "de"));
