// When the callbackFn returns undefined or nothing, the resulting array contains undefined.

// If you want to delete the element instead, chain a filter() method after map().
// or use the flatMap() method which is a combination of map() and flat() methods, and return an empty array to signify deletion.

function multiply2(multiplier, ...otherArgs) {
  return otherArgs.map((element) => multiplier * element);
}

let newArray = multiply2(2, 5, 10, 15, undefined, 25);
newArray = newArray.filter((element) =>
  /*{
  if (element !== NaN) {
    return element;
  }
  */
  {
    return !isNaN(element);
  }
);
console.log(newArray);
