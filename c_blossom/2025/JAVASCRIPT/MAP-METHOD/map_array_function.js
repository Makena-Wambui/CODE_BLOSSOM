// we can achieve this with map as well
function multiply(multiplier, ...otherArgs) {
  // otherArgs is an array that we iterate over
  // we multiply each element of the array with the multiplier

  let i,
    result = [];

  for (i = 0; i < otherArgs.length; i++) {
    result.push(multiplier * otherArgs[i]);
  }

  return result;
}

console.log(multiply(2, 3, 4, 5));

function multiply2(multiplier, ...otherArgs) {
  return otherArgs.map((arg) => multiplier * arg);
}

console.log(multiply2(2, 3, 4, 5));

const array2 = [5, 10, 15, 20];
array2[2] = undefined;
console.log(array2);
console.log(multiply2(2, 5, 10, 15, undefined, 20));
// In depth look at Array.prototype.map()
/*
the map() method of array instances creates a new array that contains the results of calling a given function on each element of the calling array.

*/

const array = [2, 4, 6, 8, 10];

const newArray = array.map((element) => element * 2);

console.log(newArray);

/*
SYNTAX:
    map(callbackFn);
    map(callbackFn, thisArg);


    callbackFn: A function to execute for each element in the array.
    its return value is added as a single element to the new array that map() creates.
    callbackFn is invoked with three arguments: 
        the current element being processed in the array,
        the index of the current element being processed,
        and the array object map() was called upon.


    thisArg: optional
    Value to use as this, when executing callbackFn.


    returns a new array with the results of calling a provided function on every element in the calling array.

    map() is an iterative method

    It calls callbackFn function once for each element in the calling array and creates a new array from the results

    callbackFn is oly invoked for array indexes that have assigned values; it is not invoked for indexes that have been deleted or which have never been assigned values.

    Map() is generic: it only expects the this value ie the array to have a length property and integer keyed properties.
    it does have access to the array object's internal data structure, and it is not the same as forEach() or for...in.
    thus it can be used on array-like objects, but it is not recommended.
*/

// Array like object:
const arrLikeObject = [
  {
    0: "apple",
    1: "banana",
    length: 2,
  },

  {
    0: "cherry",
    1: "date",
    2: "elderberry",
    length: 3,
  },
];
console.log(
  arrLikeObject.map((element) => {
    return element[0];
  })
);

//map() builds a new array. calling it without using the returned array is not useful. Use forEach() or for...of instead.
