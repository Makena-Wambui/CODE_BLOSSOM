// What is an operator?
// It is a special character or series of characters that perform a task in JS

/*
    1. Assignment Operator:
    Uses = to assign a value to a variable.
*/

let name = "John"; // We use let to declare a variable name and assign it a value of "John" using the assignment operator =.

/*
    2. Arithmetic Operators:
    These are used to perform arithmetic operations on numbers.
    +: Addition is used to add two numbers or concatenate strings.
    -: Subtraction is used to subtract one number from another.
    * : Multiplication is used to multiply two numbers.
    /: Division is used to divide one number by another.
    %: Modulus is used to find the remainder of a division.
    **: Exponentiation is used to raise the first number to the power of the second number.
    ++: Increment is used to increase the value of a number by 1.
    --: Decrement is used to decrease the value of a number by 1.
    */

// Examples:
let sum = 2 + 3;

let newStr = "Hello" + " World";

let diff = 10 - 4;

let product = 5 * 6;

let quotient = 20 / 4;

let remainder = 11 % 3; // 11 divided by 3 gives a remainder of 2.

let result = 2 ** 3; // 2 raised to the power of 3 is 8.

let incrementedVal = ++sum; // Increment the value of sum by 1.

let decrementedVal = --sum; // Decrement the value of sum by 1.

// More assignment operators
// Note: An assignment operator assigns a value to its left operand based on the value of its right operand.
// The basic assignment operator is =.

/*
+=: Addition assignment operator. It adds the right operand to the left operand and assigns the result to the left operand.
*/

result += 5; // This is the same as result = result + 5;
console.log(result); // Output: 13

/*
-=: Subtraction assignment operator. It subtracts the right operand from the left operand and assigns the result to the left operand.
*/

result -= 3; // This is the same as result = result - 3;
console.log(result); // Output: 10

/*
 *=: Multiplication assignment operator. It multiplies the right operand with the left operand and assigns the result to the left operand.
 */

result *= 2; // This is the same as result = result * 2;

/*
/=: Division assignment operator. It divides the left operand by the right operand and assigns the result to the left operand.
*/

result /= 5; // This is the same as result = result / 5;

/*
%=: Remainder assignment operator. It divides the left operand by the right operand and assigns the remainder to the left operand.
*/

result %= 3; // This is the same as result = result % 3;

/*
 **=: Exponentiation assignment operator. It raises the left operand to the power of the right operand and assigns the result to the left operand.
 */

result **= 2; // result = result ** 2;
console.log(result);

// COMPARISON OPERATORS
// They compare values and return a boolean value (true or false).

/*
==: Equal to operator. It compares two values and returns true if they are equal.
*/

/*
Note: When comparing values of different types, JavaScript will convert the values to numbers before making the comparison.
This is known as type coercion.
*/
let tenString = "10";
let tenNumber = 10;
console.log(tenString == tenNumber); // Output: true

/*
===: Strict equal to operator. It compares two values and returns true if they are equal and of the same type.
*/
console.log(tenNumber === tenString); // Output: false

/*
!=: Not equal to operator. It compares two values and returns true if they are not equal.
*/

console.log(tenNumber != tenString); // false because 10 is equal to 10.

let x = 5;
let y = 6;
console.log(x != y); // Output: true

/*
!==: Strict not equal to operator. It compares two values and returns true if they are not equal and/or not of the same type.
*/
console.log(tenNumber !== tenString); // returns true because 10 is not equal to "10".
console.log(x !== y); // Output: true

/*
>: Greater than operator. It compares two values and returns true if the left operand is greater than the right operand.
*/
console.log(x > y); // Output: false

/*
<: Less than operator. It compares two values and returns true if the left operand is less than the right operand.  
*/

console.log(x < y); // Output: true

/*
>=: Greater than or equal to operator. It compares two values and returns true if the left operand is greater than or equal to the right operand.   
*/

console.log(x >= y); // Output: false
console.log(x >= 5); // Output: true

/*
<=: Less than or equal to operator. It compares two values and returns true if the left operand is less than or equal to the right operand.
*/

console.log(x <= y); // Output: true
console.log(y <= 6);

/*
For strict type evaluations, use === and !==.
*/

// LOGICAL OPERATORS
// They will combine multiple boolean values or expressions and produce a single output.
// Can be applied to values of any type, not just boolean.
// Their result can also be of any type.

/*
LOGICAL OPERATOR OR (||)

Traditonally, || is used to manipulate boolean values only.
If any of its arguments evaluate to true, then it returns true.
Otherwise it returns false.

Example with Boolean values:

Check out the four possible logical combinations of two boolean values below:
*/
console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false

/*
If an operand is not a boolean,
it is converted to a boolean value before the operation is performed.
1 is true, 0 is false.
*/

if (1 || 0) {
  console.log("1 || 0 is true");
}

/*
OR is used in an if statement to checkif any of the conditions are true.        
*/

let age = 25;
let isGenZ = true;
if (age < 26 || age > 27) {
  console.log("Age is not 26 or 27");
}

// Passing more conditions in an if statement

// OR finds the first truhy value
if (age > 30 || age > 50 || isGenZ) {
  console.log("You are Generation z!");
}

/*
Multiple ORed values

OR evaluates operands from left to right.

For each operand it converts it to boolean. If that operand evaluates to true, OR stops and returns 
the original value of that operand.

If all opearnds have been evaluated,
meaning all of the operands were false,
OR returns the last operand.

OR returns the value in its original form, not its boolean form.

In summary, a chain of OR returns the first truthy value, or the last value if no truthy is found.

*/

console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1
console.log(null || undefined || 0); // no trythy so last value, 0 is returned.
console.log(0 || null || undefined);

// EXAMPLES
// 1. Get the first truthy value from a list of expressions or values
// We use OR to choose the variable that has data or set to Annonymous if nothing is set
let firstName = ""; // an empty string is a falsy
let secondName = "";
// let nickName = "CoderGirl";
let nickName = "";
console.log(firstName || secondName || nickName || "Anonymous");

// 2. Short Circuit Evaluation
// What this means: OR processes arguments until the first truthy value is encountered.
// This value is returned immediately.
// The other arguments are ignored.
// This feature is important especially where the operand is not just a value,
// but an expression with a side effect eg function call orvariable assignment.

console.log(true || console.log("not printed"));
false || console.log("printed");
// People may use this feature to execute a command only if the left condition is false.

/*
LOGICAL OPERATOR &&
Returns true if all operands are true
Otherwise returns false

*/

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Example with if statement
let hour = 12;
let min = 45;

if (hour === 12 && min === 45) {
  console.log("It is a quarter to 1.");
}

// Any value is allowed as an opearnd of &&, just like with ||
if (1 && 0) {
  console.log(
    "Never printed because 1 is truthy and 0 is falsy so the expression evaluates to false."
  );
}

if (1 && 1) {
  console.log(
    "Printed because 1 is truthy so the expression evaluates to true."
  );
}

/*
So if you have multiple ANDed values....
The AND operator evaluates operands from left to right.
For each operand, it converts it to a boolean.
If the boolean equivalent of that operand is false,
AND stops and returns the original value of that operand.

If all operands have been evaluted,
meaning they are all truthy,
AND returns the last operand.

In summary: AND returns the first falsy value and if none was found, the last value is returned.

*/

console.log(1 && 0); // 0
console.log(1 && 10); // 10

console.log(null && 1); // null
console.log(undefined && 0); // undefined

console.log(1 && 2 && 5 && null); // null
console.log(1 && 2 && null && 5); // null
// All truthy values, so the last value is returned.
console.log(1 && 2 && 5); // 5

// && has a higher precedence than ||
// Example
console.log(1 && 10); // 10
console.log(0 && 5); // 0
console.log(10 || 0); // 10
console.log((1 && 10) || (0 && 5)); // the same as (1 && 10) || (0 && 5) => 10

// Do not replace if with || or &&
// Example:
let i = 1;

i > 0 && console.log("Greater than 0");

/*
You could say this is the same as the following:
if (i > 0) {
  console.log("Greater than 0");
}

Even though the two statements are similar, they are not the same.
The first statement is an expression and the second is a statement.
Also the if statement is more readable and easier to understand.
Use every tool for its intended purpose.
*/

/*

LOGICAL OPERATOR NOT !

Syntax is result = !value

Accepts a single argument.
Converts the operand to a boolean
Returns the opposite value.

*/

// Examples
console.log(!true); // false
console.log(!1); // false
console.log(!0); // true

// Double NOT !! is used to convert a value to a boolean
console.log(!!"my string"); // true
console.log(!!""); // false
console.log(!!0); // false

/*
we could use the Boolean built in function to achieve the same.
*/

console.log(Boolean("")); //false
console.log(Boolean("my string")); // true

// ! has a higher precedence than && and ||
// NOT is executed first, then && and ||
// Example
console.log((10 && !5) || 0);
// in the above example !5 is executed first to give false
// then 10 && false is executed to give false
// finally false || 0 is executed to give 0

// UNARY OPERATOR
// These operators only accept one operand.
// Example: !, typeof, --, ++, -
// Arithmetic operators are also called binary operators because they accept two operands.
// There are unary operators that are names rather thatn symbols eg typeof, delete, void.

console.log(typeof 5); // number
console.log(typeof ""); // string

// The unary negation - reverses the sign of a number.
let num = 5;
num = -num;
console.log(num); // -5
num = -num;
console.log(num); // 5

// Unary negation will convert non-numbers to numbers.
console.log(-""); // an empty string is converted to 0 then negated to give -0

console.log(-"nonempty"); // nonempty string is converted to NaN then negated to give NaN

// Binary operator -
let num2 = 3;
diff = num - num2;
console.log(diff); // 2

// Unary plus +
/*
It does not do anything to numbers.

If the operand is not a number, it first converts it to a number.
*/

num2 = 20;
console.log(+num2); // 20

num2 = -9;
console.log(+num2); // -9

// NON NUMBERS
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+""); // 0
console.log(-null); // -0

// Therefore unary + does the same thing as Number() function.
console.log(Number(true));
console.log(Number(false));

/*
The need to convert strings to numbers may arise once in a while.

For instance, in HTML form fields, users usually input values as strings.

And you may need to do calculations with these values.

So you need to convert the string to a number before you can do any arithmetic operations.


*/

let apples = "10";
let oranges = "20";

// If you use the binary + operator, it will concatenate the strings.
console.log(apples + oranges); // 1020

// But because we want to treat them as numbers, we need to convert the strings to numbers.
// We could say..
console.log(Number(apples) + Number(oranges)); // This method is more verbose.
console.log(+apples + +oranges); // This method is more concise.

// Unary + operator has a higher precedence than binary + operator.
// Thus, apples and oranges are converted to numbers before the addition is done.
