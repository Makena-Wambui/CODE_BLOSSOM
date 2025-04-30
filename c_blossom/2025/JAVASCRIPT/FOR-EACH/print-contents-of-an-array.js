/*

    To display the content of an array on the console,
    you can use console.table() which prints a formatted version of the array.
*/

const array = ["a", "b", "c"];

console.table(array);

// using forEach()
array.forEach((element) => console.log(element));

const logElements = (theElement, theIndex, theArray) => {
  console.log(`theArray[${theIndex}] = ${theElement}`);
};

[4, 5, , 6].forEach(logElements); // index 2 is skipped because there is no item at that index in the array.`
