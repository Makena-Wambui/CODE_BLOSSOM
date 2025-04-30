/*

They are object properties that contain a function definition.

Within the function definition, the keyword this refers to the containing object, ie the object the method is called on;
as long as the function is defined witthin the object, the method can access the object's properties and other methods.

If a function is assigned to a property later, it is not a method, but a function property.And any reference to this will reflect the context in which the function is called.

If the object's function is assigned to a variable, and executed via the variable, this will reflect the variable's context.

How to call a method of an object:
objectName.methodName()

If a method is called without (), it means you are calling it as a property. 
Hence the method will not be executed.
Rather the function definition will be returned.

*/

const car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
  color: "blue",
  display: function () {
    console.log(
      `This car is a ${this.color} ${this.year} ${this.make} ${this.model}`
    );
  },
};
car.display();

console.log(car.display); // [Function: display]

// Reference the method as a property and assign it to a variable
let method = car.display;

// Call the method via the variable
console.log(method); // [Function: display]
method(); // This car is a undefined undefined undefined undefined, reference to this is lost

// changing the value of a property
car.color = "red";
car.display(); // This car is a red 2020 Honda Civic

/* solve lost reference to this by using bind() method to bind the method to the object */
method = method.bind(car);
car.year = 2024;
method(); // This car is a red 2024 Honda Civic

const person = {
  name: "Jane",
  age: 30,
  location: "Nigeria",
  greeting: function () {
    return "INFO:" + this.name + ", " + this.age + ", " + this.location;
  },
};

// bind method to the person object
let method1 = person.greeting;
method1 = method1.bind(person);
console.log(method1());
