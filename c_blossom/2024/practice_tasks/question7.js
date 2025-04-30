// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

// First variant with NOT opearator
let age = 5;
if (!(age >= 14 && age <= 90)) {
  console.log("age is NOT between 14 and 90");
}

// Second variant
age = 20;
if (age < 14 || age > 90) {
  console.log("age is NOT between 14 and 90");
}
