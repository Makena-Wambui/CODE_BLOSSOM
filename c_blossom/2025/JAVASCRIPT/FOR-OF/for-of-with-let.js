const array = [10, 20, 30, 40, 50];

for (let variable of array) {
  /* each iteration creates a new variable.

    reassigning the variable inside the loop body does not affect the original variable in the iterable.
    */
  variable += 1;

  console.log(variable);
}

// a special rule forbids use of async as the variable name. It is invalid syntax.

/*
let async;
for (async of [1, 2, 3]) {
    console.log(async)
} 
    
SynatxError -> the left hand side of a for...of loop may not be async. 
*/
