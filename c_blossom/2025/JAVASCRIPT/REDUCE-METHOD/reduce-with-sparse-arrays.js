// reduce skips missing elements in sparse arrays

// but it does not skip undefined values.

const sparseArr = [1, 5, , 10];
console.log(
  sparseArr.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    1
  )
); // 17

const arr = [1, 5, undefined, 10];
console.log(
  arr.reduce((accumulator, currentElement) => accumulator + currentElement, 1)
);
// NaN
