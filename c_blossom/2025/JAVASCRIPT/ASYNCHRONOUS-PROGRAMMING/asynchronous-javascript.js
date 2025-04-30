/*
! Asynchronous programming allows multiple tasks to run independently of each other.

^ A task can be initiated and while waiting for it to complete other tasks can proceed.

& This non blocking nature helps improve performance and responsiveness esp in web apps

*/

console.log(`Hi`); // ^ Hi is logged to the console as usual

/*
! We use browsers to run Javascript code
^ We have Web APIs that are part of the browser that can be used to perform asynchronous tasks
& These tasks are passed to the Web APIs and are executed in the background.
* So the setTimeOut function is passed to such a Web API by Javascript, then our code keeps on running as usual.
? This ensures the rest of the code is not blocked from executing.

* So after all the code has finished executing, the function gets pushed to the call stack and finally gets executed.
*/
setTimeout(() => console.log(`Friend`), 2000);

console.log(`End`);

/*
OUTPUT:
Hi
End
Friend
*/
