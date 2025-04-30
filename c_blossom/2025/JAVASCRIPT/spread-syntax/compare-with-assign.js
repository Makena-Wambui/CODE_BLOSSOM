// Object.assign() can be used to mutate an object, whereas spread can not.

const obj = { foo: "bar", x: 30 };

Object.assign(obj, { x: 45 });

console.log(obj);

let obj1 = { ...obj, ...{ x: 100 } };

console.log(obj1);

// Object.assign() triggers setters on the target object but spread does not
const objectAssigned = Object.assign(
  {
    set foo(x) {
      console.log(x);
    },
  },
  { foo: 1 }
); // 1 because the setter is triggered by Object.assign()

// Spread does not trigger setters
const objectSpread = {
  set foo(x) {
    console.log(x);
  },
  ...{ foo: 1 },
}; // nothing is logged because the setter is not triggered by spread

console.log(objectSpread);

const object1 = { foo: "bar", x: 42 };
const object2 = { foo: "baz", y: 13 };
const merge = (...objects) => {
  console.log(objects);
  console.log({ ...objects });
};

merge(object1, object2);
/*
In the first console.log(objects), 
we are using ...objects with the rest operator as a parameter to the function merge.
Therefore objects is an array of objects, [{ foo: 'bar', x: 42 }, { foo: 'baz', y: 13 }]
Then we spread that array of objects into a new object, { ...objects }.
Hence we wnd with a new object: { '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }
*/

/*
An implementation of merge using the spread syntax, whose behavior is similar to Object.assign(), except that it does not mutate the original objects or trigger setters.
*/
const merge2 = (...objs) =>
  objs.reduce(
    (accumulator, currentObj) => ({ ...accumulator, ...currentObj }),
    {}
  );
console.log(merge2(object1, object2));
