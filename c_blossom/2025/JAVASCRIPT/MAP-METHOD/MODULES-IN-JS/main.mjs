import { sayHi } from "./sayHi.mjs";

/*
The import directive loads the module by path ./sayHi.mjs relative to the current file.
It is called a relative URL.
It then assigns the exported function sayHi to the corresponding variable sayHi in the current module.
*/

console.log(sayHi); // [Function: sayHi]
sayHi("John"); // Hello, John!
