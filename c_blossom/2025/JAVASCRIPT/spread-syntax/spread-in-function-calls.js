// to replace apply() in function calls

// It is common to replace Function.prototype.apply() with spread in cases where you want to use the elements of an array as arguments to a function

function sum(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];

console.log(sum.apply(null, arr));

// Can be replaced with:
console.log(sum(...arr));

// Any argument in the argument list can be spread, and you can use spread multiple times.

function sum2(a, b, c, d, e) {
  return a + b + c + d + e;
}
const a = [1, 2];
console.log(sum2(...a, 1, ...[3, 4, 5])); // 5 is ignored
