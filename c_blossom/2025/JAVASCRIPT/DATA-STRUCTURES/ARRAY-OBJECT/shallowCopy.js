/*
    What is shallow copying in JS?
        Creating a new object, that is a copy of the original object, but only at the first level.

        If the original object contains nested objects or arrays, the references to those nested objects are copied, and not their values.
        Hence if you modify a nested object in the copied version, then the original object will also be modified.
*/

// Using Object.assign() to create a shallow copy of an object
const originalObject = {
  name: "Alice",
  information: { age: 25, city: "New York" },
};

const copiedObject = Object.assign({}, originalObject);
console.log(copiedObject);

console.log(copiedObject.name);
copiedObject.name = "Mary";
console.log(copiedObject.name); // This only affects the copy.
console.log(originalObject.name); // The original object remains unchanged.

copiedObject.information.city = "Los Angeles";
console.log(copiedObject.information.city); // Los Angeles
console.log(originalObject.information.city); // Los Angeles, hence the original object is also modified.

// Copying using the spread operator
const object1 = {
  nickName: "Booboo",
  details: { breed: "Pomeranian", color: "white" },
};
const object2 = { ...object1 };
console.log(object2);
object2.nickName = "Bella";
console.log(object2.nickName); // Bella
console.log(object1.nickName); // Booboo
object2.details.breed = "Poodle";
console.log(object2.details.breed); // Poodle
console.log(object1.details.breed); // Poodle
