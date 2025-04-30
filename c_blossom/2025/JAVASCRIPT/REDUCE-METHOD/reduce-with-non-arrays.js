/*
reduce() reads the length property of this, then accesses all properties whose key is a non negative integers less than length.
*/

const arrayLikeObj = {
  length: 3,
  0: 2,
  1: 4,
  2: 6,
  3: 8, // this property is not accessed by reduce becaus the length is 3.
};

console.log(
  Array.prototype.reduce.call(arrayLikeObj, (acc, currVal) => acc + currVal)
); // 12
