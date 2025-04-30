const iterableObject = {
  /* we create a method onthe object that has a special key of Symbol.iterator
    This method is called when the object is used in an iteration context, like a for...of loop.
    */
  [Symbol.iterator]() {
    let iterNumber = 1; // keeps track of the current iteration step

    return {
      // [Symbol.iterator]() return an iterator object that implements the next() method
      next() {
        // next() method returns an object with two properties: value and done
        // next() determines the behavior of each iteration
        // increment iterNumber for the next call.
        if (iterNumber <= 5) {
          return { value: iterNumber++, done: false };
        }

        // if iterNumber is greater than 5, iterator signals the end of iteration by returning
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterableObject) {
  console.log(value);
}

// Iterate over an object with a [Symbol.iterator]() generator method
const anotherObject = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  },
};

for (const value of anotherObject) {
  console.log(value);
}
