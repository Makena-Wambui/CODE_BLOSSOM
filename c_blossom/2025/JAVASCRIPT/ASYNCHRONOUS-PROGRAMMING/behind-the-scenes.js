/*
* To understand asynchronous behavior better, it is important to understand Javascript run time environment, specifically the event loop and call stack.

& CALL STACK:
    ^ The call stack is where functions are executed in the order they are called.
    ^ In synchronous operations each function added to the stack and executed before moving to the next.

& WEB APIS IN THE BROWSER:
    ^ Functions like setTimeOut, HTTP Requests, event listeners are handled by Web APIs in the browser
    ^ When an asynchronous function like setTimeOut is called,it is passed to these Web APIs.
    ^ These Web APIs manage the timing without blocking the main call stack.

& CALLBACK QUEUE:
    Once the WEB API has finished its job, like waiting for timeout,
    it pushes the callback function, like the one in setTimeOut to the call back queue

& EVENT LOOP:
    ^ The event loop continously checks the call stack.
    ^ If the call stack is empty, the event loop pushes the functions from the call back queue onto the stack for execution
    ^ This is why `Friend ` is logged to the console after the other code has finished execution.


*/
