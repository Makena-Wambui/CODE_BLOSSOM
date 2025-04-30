const array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 27 },
  { name: "Alice", age: 30 },
  { name: "John", age: 31 },
  { name: "Bob", age: 22 },
];

// The goal is to group the objects in the array, array by the property name.
// End result should be an object with the name as the key and an array of objects with that name as the value.
// {'Alice': [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }], 'Bob': [{ name: 'Bob', age: 27 }, { name: 'Bob', age: 22 }], 'John': [{ name: 'John', age: 31 }]}

// The reduce method is not the best choice for this task because it is not the most readable way to group objects by a property.
const groups = array.reduce((accumulator, currentObject) => {
  /* 
    accumulator starts with an empty object, ie the second argument to reduce is an empty object 
    currentObject is the current object being processed in the array 
    */

  const key = currentObject.name;

  // check if accumulator has a key that matches the current object's name
  // check if there is already a current group for the current object's name

  const groupByName = accumulator[key] ?? [];

  // add the current object to the group
  accumulator[key] = [...groupByName, currentObject];

  return accumulator;
}, {});

/*
First iteration of the callbackFn function called by reduce:
    accumulator: {}
    currentObject: { name: 'Alice', age: 25 }
    key = 'Alice'
    accumulator is currently empty so key 'Alice' does not exist in the accumulator object
    accumulator[key] is undefined
    use the nullish coallescing operator to set groupByName to an empty array if accumulator[key] is undefined
    groupByName = [] so accumulator['Alice'] = [{ name: 'Alice', age: 25 }]
    accumulator = { 'Alice': [{ name: 'Alice', age: 25 }] }


Second iteration of the callbackFn function called by reduce:
    accumulator: { 'Alice': [{ name: 'Alice', age: 25 }] }
    currentObject: { name: 'Bob', age: 27 }
    key = 'Bob'
    accumulator does not have a key 'Bob'
    accumulator[key] is undefined
    use the nullish coallescing operator to set groupByName to an empty array if accumulator[key] is undefined
    groupByName = [] so accumulator['Bob'] = [{ name: 'Bob', age: 27 }]
    accumulator = { 'Alice': [{ name: 'Alice', age: 25 }], 'Bob': [{ name: 'Bob', age: 27 }] }

Third iteration of the callbackFn function called by reduce:
    accumulator: { 'Alice': [{ name: 'Alice', age: 25 }], 'Bob': [{ name: 'Bob', age: 27 }] }
    currentObject: { name: 'Alice', age: 30 }
    key = 'Alice'
    accumulator has a key 'Alice'
    accumulator[key] is [{ name: 'Alice', age: 25 }]
    groupByName = [{ name: 'Alice', age: 25 }]
    accumulator['Alice'] = [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }]
    accumulator = { 'Alice': [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }], 'Bob': [{ name: 'Bob', age: 27 }] }

Fourth iteration of the callbackFn function called by reduce:
    accumulator: { 'Alice': [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }], 'Bob': [{ name: 'Bob', age: 27 }] }
    currentObject: { name: 'John', age: 31 }
    key = 'John'
    accumulator does not have a key 'John'
    accumulator[key] is undefined
    use the nullish coallescing operator to set groupByName to an empty array if accumulator[key] is undefined
    groupByName = [] so accumulator['John'] = [{ name: 'John', age: 31 }]
    accumulator = { 'Alice': [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }], 'Bob': [{ name: 'Bob', age: 27 }], 'John': [{ name: 'John', age: 31 }] }


Final iteration of the callbackFn function called by reduce:
    accumulator: { 'Alice': [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }], 'Bob': [{ name: 'Bob', age: 27 }], 'John': [{ name: 'John', age: 31 }] }
    currentObject: { name: 'Bob', age: 22 }
    key = 'Bob'
    accumulator has a key 'Bob'
    accumulator[key] is [{ name: 'Bob', age: 27 }]
    groupByName = [{ name: 'Bob', age: 27 }]
    accumulator['Bob'] = [{ name: 'Bob', age: 27 }, { name: 'Bob', age: 22 }]
    accumulator = { 'Alice': [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }], 'Bob': [{ name: 'Bob', age: 27 }, { name: 'Bob', age: 22 }], 'John': [{ name: 'John', age: 31 }] }
*/

console.log(groups);

// instead of using reduce, we use Object.groupBy() method from the lodash library to group objects by a property
const groups1 = Object.groupBy(array, (object) => object.name);
console.log(groups1);
