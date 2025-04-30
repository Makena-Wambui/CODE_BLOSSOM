// AND'ed alerts

// What will this code show?

alert(alert(1) && alert(2));

/*
The answer:
AND starts evaluation from the left operand which is alert(1).

alert(1) displays a message with 1 on the screen

The alert function does not return any value.
This means it returns undefined.

So the first alert returns undefined, which is falsy value.
AND returns the first falsy value it finds or the last value if none are falsy.

The outer alert is called with undefined.
So undefined is displayed on the screen.

In summary:
The first alert shows 1, and then the second one shows undefined.
*/
