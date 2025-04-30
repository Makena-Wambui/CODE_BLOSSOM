/*
iterable iterators are iterators that have a Symbol.iterator]() method that returns the iterator object itself ie this

this is a common technique to make iterators usable in syntaxes expecting iterables such as for...of loops

*/

let iterNo = 1; // keeps track of the current iteration step

const iteratorObject = {
  next() {
    if (iterNo <= 3) {
      return { value: iterNo++, done: false };
    }
    return { value: undefined, done: true };
  },

  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iteratorObject) {
  console.log(value);
}
