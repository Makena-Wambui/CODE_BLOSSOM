/*
The arguments of a function are stored in an array like object called arguments object
Within a function, you can address the arguments passed to it by using the arguments object like this: arguments[i]

i is the index of the argument you want to reference. The first argument is at index 0, the second at index 1, and so on.

Total number of arguments: arguments.length


Using the arguments object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function.

Use arguments.length to determine the number of arguments actually passed to the function, and then access each argument using the arguments object.

Example: a function that concatenates several strings:
    the only formal argument for the function is a string that specifies the separator to use between the strings to concatenate


    NB: The arguments object is not an array. It is similar to an array, but does not have any array properties except length.
    Also, it does not have all the methods of Array. For example, it does not have the methods map(), filter(), reduce(), etc.
*/

function concatenateStrings(separator) {
  // declare an empty string to store the concatenated strings
  let result = "";

  // the first argument is the separator, so we start iterating from the second argument
  console.log(arguments[0]);

  // iterate over the arguments object
  let i;
  for (i = 1; i < arguments.length; i++) {
    result = result + arguments[i];

    // if the current argument is not the last one, add the separator
    if (i < arguments.length - 1) {
      result = result + separator;
    }
  }

  return result;
}

console.log(concatenateStrings(", ", "apple", "banana", "cherry", "date"));
console.log(concatenateStrings(". "));

console.log(
  concatenateStrings("; ", "red", "green", "blue", "yellow", "purple", "orange")
);
