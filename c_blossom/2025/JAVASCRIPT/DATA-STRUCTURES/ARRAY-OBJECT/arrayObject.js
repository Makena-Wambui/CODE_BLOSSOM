/*
The array object allows storing a collection of multiple items under a single variable name

Has members for performing common array operations.

In JS, arrays are not primitives, rather they are objects.
They have these core characteristics:
  - They are resizable, and can contain a mix of different data types. If this is not a characteristic you desire, use a typed array.

  - JS Arrays are not associative arrays. Hence array elements can not be accessed using arbitrary strings as indices. You must use non negative integers as indices(or their respective string form).

  - JS arrays are zero indexed. The first element is at index 0, the second at index 1, and so on. The last element is at the array's length property minus 1.

  - JS array copy operations create shallow copies. All standard built in copy operations produce shallow copies, not deep copies. This means that if the array contains objects, the objects are not copied, rather the references to the objects are copied. To deep copy an array, you must copy each element of the array individually.

  */

const arr = [1, "two", 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);
