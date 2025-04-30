// How reduce works without an initial value

const arr = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, currentIndex) {
  const returnValue = accumulator + currentValue;

  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}, returnValue: ${returnValue}`
  );

  return returnValue;
}

console.log(arr.reduce(reducer)); // call reduce on the array without providing an initial value.
