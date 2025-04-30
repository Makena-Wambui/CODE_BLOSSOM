/*
To create a true deep copy , where nested objects are also copied, use structured cloning or JSON.parse(JSON.stringify(object)).

This method removes references.
But it does not work well with functions, Dates or special Objects.

You can also deep copy using recursion or libraries like Lodash
*/

const originalObject = {
  name: "Alice",
  information: { age: 25, city: "New York" },
};

const clonedObject = JSON.parse(JSON.stringify(originalObject));
console.log(clonedObject);

clonedObject.information.age = 30;
console.log(clonedObject.information.age); // 30
console.log(originalObject.information.age); // 25
