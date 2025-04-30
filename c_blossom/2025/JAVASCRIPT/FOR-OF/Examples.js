function sum(a, b) {
  return a + b;
}

function greeting(name) {
  return `Hello, ${name}`;
}

function maximum(a, b) {
  return Math.max(a, b);
}

console.log(maximum(1, 2));

const myStr = "makena".split(""); // ["m", "a", "k", "e", "n", "a"]
console.log(myStr.reverse()); // ["a", "n", "e", "k", "a", "m"]
console.log(myStr.join("")); // anekam

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("dog")); // god

function checkIsEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}

console.log(checkIsEvenOrOdd(10));
