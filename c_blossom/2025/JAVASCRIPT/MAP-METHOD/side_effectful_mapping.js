// The callback can have side effects

const cart = [5, 10, 15];
let total = 0;

const afterTax = cart.map((cartPrice) => {
  /*
    Not recommended because copying methods are best used with pure functions.
    Better option would be to iterate the array twice, once for the total and once for the afterTax.
    */
  total += cartPrice;
  return cartPrice * 1.2;
});

console.log(cart); // Output: [5, 10, 15]
console.log(afterTax); // Output: [6, 12, 18]
console.log(total); // Output: 30
