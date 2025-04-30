// prompt is a function you could use to interact with the user,
// Others include alert and confirm.
// Let us look at prompt.

/*

It accepts two arguments.

result = prompt(title, [default])

prompt shows a modal window, with a text message, an input field for the visitor, and the buttons OK/Cancel.

The first argument is the text to show the visitor.
The second one is the initial value for the input field.
It is optional.

[default]: these square brackets around this parameter show that it is optional.

Visitor can type something in the input field,
then press OK.

The text they type in will be stored in the result.

Hitting cancel or Esc will cancel the input and return null.
So we get null in result in that case.

Therefore, a call to prompt will return the text in the input field or null if Cancel/Esc was selected.

*/

// Example:
let myName = prompt("What is your name?", "John Doe");
alert(`Your name is ${myName}`);
