// OR AND OR

alert(null || (2 && 3) || 4);

// What is the code going to show?

/*
The answer:
&& has a higher precedence than ||, so it executes first.

2 && 3 becomes 3 because both operands are truthy so and returns the last value in the absence of a falsy value.

null || 3 || 4 becomes 3 because OR returns the first truthy value which is 3.

alert shows 3.
*/
