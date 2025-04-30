/*
~ In synchronous programming, opearations are performed one after the other in a sequence.

! Each line of code waits for the previous one to finish.

^ The program executes in a predictable linear fashion, with each task being completed before the next one begins.

? This is easy to follow and straightforward, but has some drawbacks,
? especially when dealing with time consuming tasks like fetching data from a server, or reading a large file

& If such a task is included in the sequence, it will block the execution of the rest of the code till it is finished.
& This leads to delays and a bad user experience.
*/

console.log(`Hello`);
console.log(`friend,`);
console.log(`How are you?`);
