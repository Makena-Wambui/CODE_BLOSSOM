// What is this code going to show?

alert(1 && null && 2);

/*
The answer:
AND starts evaluation from the left operand which is 1.
1 is truthy so AND continues to the next operand.
null is falsy so AND stops and returns null.

alert(null) displays a message with null on the screen.
*/
