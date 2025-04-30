/*
The top level scope of all scripts are shared.

This could include many functions and global variables from different files.

To avoid name conflicts, limit the number of globally declared names.

This name conflict issue is greatly mitigated in modules.

Still, limiting the scope of temporary variables is still useful, esp when the file is very long.

You can use the IIFE pattern if you have some initialization code you dont need to use again

This is better than using a function declaration or a function expression because it ensures the code is only runhere and once.

*/

// Top level of a script, not a module.
var globalVariable = (() => {
  // some initialization code
  let firstVar = something();

  let secondVar = somethingElse();

  return firstVar + secondVar;
})();

function something() {
  return `I am a `;
}

function somethingElse() {
  return `fullstack developer.`;
}

/*
firstVar and secondVar are not accessible outside the IIFE

console.log(firstVar); // not defined

*/

console.log(globalVariable);
