// OR'ed alerts
//What will the code below output?

alert(alert(1) || 2 || alert(3));

/*
The answer:
OR starts evaluation from the left operand which is alert(1).
alert(1) displays a message with 1 on the screen

The alert function does not return any value.
This means it returns undefined.

So the first alert returns undefined, which is falsy value.
So OR continues seraching for a truthy value.
2 is truthy so OR immediately stops and returns 2.

All other operands are ignored because OR has found the first truthy value.

the outer alert is then called with 2.
Hence 2 is shown on the screen.
*/
