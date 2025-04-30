/*
A handler may return not exactly a promise, but a thenable object.
This is an object that has a method .then.
This object is treated like a promise.

third party libraries may implement "promise-compatible" objects of their own.
these objects can have an extended set of methods and properties.
but also be compatible with native promises, because they implement .then
*/
