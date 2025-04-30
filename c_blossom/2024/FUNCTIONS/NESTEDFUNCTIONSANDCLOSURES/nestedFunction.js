function addSquares(num1, num2) {
  function square(num) {
    return num * num;
  }
  return square(num1) + square(num2);
}

console.log(addSquares(2, 3)); // 13
