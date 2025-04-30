// Iterating over a generator function using for-of loop

function* myFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const myFuncResult = myFunc();

for (const value of myFuncResult) {
  console.log(value);
}
