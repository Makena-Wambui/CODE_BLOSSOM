// conditionally adding values to an array.

// you can make an element absent or present in an array literal depending on a condition, using the conditional operator.

const isSumer = false;
//const isSumer = true;
/*
when condition is false, we spread an empty array so that nothing gets added to the final array.
*/

const fruits = ["mangoes", "kiwi", ...(isSumer ? ["watermelon"] : [])];
console.log(fruits);

// The above is different from:
const citrusFruits = [
  "oranges",
  "tangerines",
  /* 
  if isSumer is false, then an undefined element is added onto the array.
  This element can be visited by methods such as Array.prototype.map
  */
  isSumer ? "grapefruit" : undefined,
];
console.log(citrusFruits);
