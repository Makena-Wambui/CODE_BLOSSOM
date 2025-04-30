/*
Assume you are a top singer with millions of fans.
Your fans are asking you day and night for your upcoming song.

To bring them some relief, you promise to send it to them once it is published.
So you give your fans a list, where they can fill in their email addresses, so that when the song is available, all addresses in the list will receive an email with the download link.

And even if something goes wrong, say a fire in the studio, you promise to inform them about the delay.

Everyone is happy: 
    You because noone hounds you for the song.
    Your fans because they know they will be the first to get the song.
    And you have a list of emails to inform in case of a delay.

This is an analogy for: 
    A producing code that does something and takes time eg loading data over a network, reading files, etc. That is the singer.

    A consuming code that wants the result of the producing code once it is ready. There could be many functions that need that result. These are the fans.

    A promise - a special JavaScript object that links the producing code and the consuming code together. This is the email subscription list.
    The producing code takes whatever time it needs to produce the promised result,
    Then the promise makes that result available to all of the subscribed code.

The constructor synatx for a promise object is:
*/

const promise = new Promise(function (resolve, reject) {
  /*
    This is the producing code.

    The function passed to new Promise is called the executor.
    When the new promise object is created, this executor runs automatically.
    It contains the producing code which should eventually produce a result.
    The executor is the singer.

    The arguments of the executor, resolve and reject are callbacks provided by JavaScript itself.
    We only need to write our code inside the executor.

    When the executor eventually obtains the result, it should call one of these callbacks:
    resolve(value) - if the job finished successfully with result value.
    reject(error) - if an error occurred, error is the error object.
    */
  // resolve(value);
  // reject(err);
});

/*
Promise object returned by new Promise constructor has these properties:
    1. State - initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
    2. Result - initially undefined then changes to value when resolve(value) is called or error object when reject(error) is called.
*/

// A promise constructorand a simple executor function with producing code that takes time via setTimeOut.

const myPromise = new Promise(function (resolve, reject) {
  // executor function is executed automatically when the promise is constructed

  // After one second signal that the job is done with the result "done"

  // myPromise is a fulfilled promise. The call to resolve moves the promise object's state from pending to fulfilled.
  setTimeout(() => resolve("done"), 1000);
});

// An example of the executor rejecting the promise with an error

const rejectedPromise = new Promise(function (resolve, reject) {
  // After two seconds signal that the job is done with an error

  // rejectedPromise is a rejected promise. The call to reject moves the promise object's state from pending to rejected.
  setTimeout(() => reject(new Error("Error!")), 2000);
});

/*
The executor performs a job, then calls either resolve or reject to change the state of the promise object.

A promise that is either resolved or rejected is said to be settled, as opposed to being initially pending.

The executor should only call one resolve or reject.
Any state change is final.
Any further calls to resolve and reject are ignored.

See example below:
*/

const prom = new Promise(function (resolve, reject) {
  resolve("done");

  /*
  A job done by the executor may only have one result or an error.

  resolve and reject only take one argument or none at all. Any additional arguments are ignored.
  
  In case something goes wrong, the executor shd call reject.
  Just like with resolve, you can pass any type of argument to reject.
  It is however recommended to use Error objects, or objects that inherit from Error.
  */

  reject(new Error("...")); // ignored

  setTimeout(() => resolve("..."), 200); // ignored
});

/*
We can also immeditely call resolve or reject.

In practice, the executor usually performs a job asynchronously, then calls resolve or reject after some time.
It does not have to do this.
reject or resolve can be called immeditely:
*/

const promised = new Promise(function (resolve, reject) {
  /*
  The executor does not take time to do the job and calls resolve immediately

  For instance, the executor starts to do a job and finds that it is already done and cached.
  So we immediately have a resolved promise.

  The properties state and result of the promise object are internal.
  We can't directly access them.
  But we can use promise methods .then, .catch, .finally to interact with the promise.
  */
  resolve(567); // resolve immediately gives the result 567
});
