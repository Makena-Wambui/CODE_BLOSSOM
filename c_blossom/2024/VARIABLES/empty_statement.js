/*
An empty statement is used to provide no statement, although the JavaScript syntax expects one.

*/

// Empty loop body
const array = [1, 2, 3, 4, 5];
console.log(array[0]);

for (let i = 0; i < array.length; array[i++] **= 2 /* empty statement */);

console.log(array);

/*
The above for loop does three things:
1. Initializes i to 0.
2. Checks if i is less than the length of the array.
3. Assigns the value of i ** 2 to the array element at index i then increments i by 1, so the new value of i is i + 1, which is used in the next iteration.

In the first iteration: i = 0
0 < 5 which is true
Assign arr[0]  which is 1 ^ 2 = 1
Increment i by 1, so i = 1

In the second iteration: i = 1
1 < 5 which is true
Assign arr[1] which is 2 ^ 2 = 4
Increment i by 1, so i = 2

In the third iteration: i = 2
2 < 5 which is true
Assign arr[2] which is 3 ^ 2 = 9
Increment i by 1, so i = 3

In the fourth iteration: i = 3
3 < 5 which is true
Assign arr[3] which is 4 ^ 2 = 16
Increment i by 1, so i = 4

In the fifth iteration: i = 4
4 < 5 which is true
Assign arr[4] which is 5 ^ 2 = 25
Increment i by 1, so i = 5

In the sixth iteration: i = 5
5 < 5 which is false
End the loop
*/

// Syntax of an empty statement is one or more semicolons. like ; or ;;; or ;;;;;; etc.

// The opposite where you want multiple statements even though the syntax expects one is a block statement.

// Comment intentional usage of an empty statement as it is not obviously discernible from a normal semicolon.

// For example, here the usage of the semicolon is unintentional:
/*
if (condition); improper usage of a semicolon
    console.log("Hello, World!");
*/
let condition;

if (condition) console.log("Hello, World!");
