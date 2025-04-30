// Strings are iterated by unicode code points meaning that the for...of loop will iterate over each character in the string.

const string = "hello";

for (const char of string) {
  console.log(char);
}
