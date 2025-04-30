/*
for..of statement executes a loop on a sequnce of values sourced from an iterable object 
like instances of Array, TypedArray, String, Map, Set, NodeList, arguments object, 
generators produced by generator functions, user defined iterables
*/

const arr = ["a", "b", "c", "d", "e"];

for (const element of arr) {
  console.log(element);
}

/*
SYNTAX:

 for (variable of iterable) {
  statement
  }

  variable: receives a value from the sequence on each iteration.
    can be a let, var or const declaration.
    or an assignment target eg a previously declared variable, an object property or a destructuring assignment pattern.

    variables declared with var are not local to the loop. Instead, they are in the same scope the for..of loop is in.

    iterable: the iterable object. the source of the sequence of values on which the loop iterates.

    statement: statement executed in every iteration.
        May reference the variable.
        use a block statement to execute multiple statements.


    Each operation of the loop on a value is called an iteration.
    The loop iterates over the iterable.
    Each iteration executes statements that may reference the variable.
    Use a block statement if you want to execute multiple statements in each iteration.


    When a for...of loop iterates over an iterable, it first calls the iterables [Symbol.iterator]() method.
    The method returns an iterator.
    The resulting iterator's next() method is called repeatedly to produce a sequenceof values assigned to the variable.

    A for..of loop exits when the iterator has completed ie the next() method returns an object with the done property set to true.


    You can use control flow statements inside statement:
        break: stops statement execution and goes to the first statement after the loop.

        continue: stops statement execution and goes to the next iteration of the loop.

        if for ...of loop exited early, for instance a break statement was encountered or an error was thrown, the iterator's return() method is called to perform any necessary cleanup.

        variable part of for...of accepts any value that can come before the assignment(=) operator.
        You can use const to declare the variable, as long as it is not reassigned in the loop body.
        variable can change between iterations, because they are separate variables created for each iteration.
        otherwise, use let

        

*/
