// Nested function forms a closure. So you can call the outer function and specify arguments for both the outer and inner functions.

function outer(x) {
  function inner(y) {
    // inner can access variables and arguments of the outer function
    return x + y;
  }
  return inner;
}

console.log(outer(3)(4)); // You can pass arguments for both the outer and inner functions.

// You could assign outer to a variable and then call the inner function.
const outerFunc = outer(3);
console.log(outerFunc(4)); // 7

const pet = function (name) {
  // The outer function defines a variable called "name"

  // The inner function has access to the "name" variable of the outer function
  const getName = function () {
    return name;
  };

  return getName;
};

const myPetsName = pet("Lucy");

/*
Let us return an object that contains methods for manipulating the inner variables of the outer function.
*/

const createPet = function (name) {
  let gender; // the inner variable of the outer function createPet

  // An object that accesses the inner variables of the outer function

  const pet = {
    // This methods sets the name of the pet. It is similar to setName : function () { ... }
    setName(newName) {
      name = newName;
    },

    // This method returns the name of the pet. It is similar to getName : function () { ... }
    getName() {
      return name;
    },

    getGender() {
      return gender;
    },

    setGender(newGender) {
      if (
        newGender.toLowerCase() === "male" ||
        newGender.toLowerCase() === "female"
      ) {
        gender = newGender;
      }
    },
  };
  return pet; // function returns the object
};

const myPet = createPet("Lucy");
console.log(myPet.getName());
myPet.setName("Ben");
console.log(myPet.getName());
myPet.setGender("male");
console.log(myPet.getGender()); // male
