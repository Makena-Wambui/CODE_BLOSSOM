/*
    The forEach method of Array instances executes the provided callback function once for each element present in the array in ascending order. 
*/

const myArray = ["a", "b", "c", "d"];

myArray.forEach((arrayElement) => console.log(arrayElement));

/*
    SYNTAX:
       forEach(callbackFn)
       forEach(callbackFn, thisArg)


    callbackFn:
      Function exceuted for each element in the array.
      Its return value is ignored.
      This function is called with these arguments:
       - element: the current element being processed in the array.
       - index: the index of the current element being processed in the array.
       - array: the array forEach() was called upon.

       Only invoked for array indices that have assigned values.
       It is not invoked for empty slots in sparse arrays.

    thisArg:
        Optional. Value to use as this when executing callbackFn.
        If thisArg is provided, it will be used as the this value for each invocation of callbackFn.
        If it is not provided, undefined is used instead.

    RETURN VALUE:
        undefined

    forEach method is generic.
        it only expects the this value to have a length property and integer keyed properties.


    forEach expects a synchronous function.
     It does not wait for promises.
     Be aware of the implications when using promises or async functions as forEach callback.


*/
