// you can make an element present or absent in an object literal, based on a condition, by using the conditional operator.

const isSumer = false;

const fruits = {
  apples: 10,
  bananas: 5,
  /*
  If the condition is false, we spread an empty object.
  Hence nothing is added in the final object.
  */
  ...(isSumer ? { watermelon: 20 } : {}),
};
console.log(fruits);

// The above code is different from:
const myFruits = {
  apples: 10,
  bananas: 5,
  /*
  The watermelon property is always present, and will be visited by methods like Object.keys()
  */
  watermelon: isSumer ? 20 : undefined,
};
console.log(myFruits);

//Spread empty object
const empty = {};
const anotherObj = { 1: "one", 2: "two" };
const newObj = { ...empty, ...anotherObj };
console.log(newObj);
