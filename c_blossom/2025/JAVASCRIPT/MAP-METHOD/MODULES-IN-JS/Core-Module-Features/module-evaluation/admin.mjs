/*
Top level module code should be used for initialization and creation of module specific internal data structures.

~ If you want to make something callable multiple times, export it as a function

! admin.mjs is a module that exports an object named admin.
^ This module will be imported from multiple files. 
*/

export let admin = {
  name: "John",
};
