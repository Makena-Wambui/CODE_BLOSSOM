// Array has only one element, regardless of position, and no initialVaue is provided OR no initialValue is provided and array is empty, the solo value will be returned without calling callbackFn.

// If initialValue is provided, and array is not empty, reduce will invoke callbackFn starting at index 0, not index 1.

// if initialValue is not provided, then reduce() will act differently on arrays that have lentgth > 1, equal to 1 and equal to 0.

// Define an arrow function that returns the maximum of two numbers.
const getMax = (num1, num2) => Math.max(num1, num2);

//getMax is the callbackFn that is executed on each element of the array. On its first invokation, it will return the maximum of the array at index 0 and the initialValue.
console.log([1, 100].reduce(getMax, 50)); // Output: 100
console.log([1, 100].reduce(getMax, 500)); // Output: 500

console.log([50].reduce(getMax, 5)); // Output: 50
console.log([50].reduce(getMax, 500));

console.log([20, 40].reduce(getMax)); // getMax is only invoked once for the element at index 1 hence the output is 40.
console.log([5, 0].reduce(getMax));

// callbackFn is not invoked
console.log([4].reduce(getMax)); // array has only one element, so the element is returned without invoking callbackFn.
console.log([].reduce(getMax, 100)); // 100 is returned without invoking callbackFn because the array is empty.

//empty and no initial value
console.log([].reduce(getMax)); // TypeError: Reduce of empty array with no initial value
