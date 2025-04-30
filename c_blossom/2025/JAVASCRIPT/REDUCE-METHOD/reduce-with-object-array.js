// In order to sum up the values contained in an array of objects, you must supply an initial value, so that each item passes through the callbackFn

const objectArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];

const initialValue = 0;

console.log(
  objectArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    initialValue
  )
);
