// Array.prototype.reduce() method of array instances

/*
It executes a user supplied reducer callback function on each element of the array in order,
passing in the return value from the calculation on the preceding element.

The final result of running the reducer across all elements of the calling array is a single value.


The first time the reducer callback function is run, there is no return value from the previous calculation.
You can supply an initial value to use in its place.

Otherwise the element at index 0 is used as the initial value.
Iteration will then start at index 1 and continue to the end of the array.
*/

const array = [1, 2, 3, 4, 5];

const initialValue = 0;

const totalValue = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue // the initialValue is optional and is used as the initial value of the accumulator.
); // the reducer is an arrow function that takes two arguments, accumulator and currentValue and returns their sum.

console.log(totalValue); // Output: 15

/*

SYNTAX:

reduce(callbackFn)

reduce(callbackFn, initialValue)


PARAMETERS:
    callbackFn -> The function that is executed on each element of the array.
                Its return value becomes the value of the accumulator parameter in its next iteration/invocation.
                The return value of the callbackFn's last invocation is the return value of the reduce() method.
                callbackFn is called with the following arguments: 
                    1. accumulator -> The value resulting from the previous call to callbackFn.
                                on the first call to callbackFn, it's value is the initial value if initialValue is provided. Otherwise, it's the value of the first element of the array.

                    2. currentValue -> The current element of the array.
                                  on the first call to callbackFn, its value is array[0] if initialValue is provided. Otherwise, it's the value of the second element of the array.

                    3. currentIndex -> The index of the current element.
                                   on the first call to callbackFn, its value is 0 if initialValue is provided. Otherwise, it's 1.

                    4. array -> The array reduce() was called upon.

    initialValue -> optional.
                    value of the accumulator in the first call to the callbackFn. if specified, the callbackFn starts executing with current value being array[0] and accumulator being initialValue.

                    if initialvalue is not provided, the value of accumulator is the first element of the array and the current value is the second element of the array.
                    So if the array is empty and initialValue is not provided, a TypeError will be thrown.

RETURN VALUE: a single value that is a result of running the callbackFn over the entire array.

Exceptions: TypeError is thrown if the array is empty and no initialValue has been provided.


reduce() is an iterative method

callbackFn is invoked only for array indices that have assigned values.Not invoked for unassigned indices.

unlike other iterative methods, reduce() does not accept an optional thisArg parameter.
callbackFn is not bound to any object, so this will be undefined in the callbackFn.
undefined gets substituted with globalThis if callbackFn is non-strict.

reduce() is generic. only expects this value to have a length property and integer keyed properties.


*/
