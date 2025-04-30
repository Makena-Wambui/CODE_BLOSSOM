// How reduce works with an initial value

const arr = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, currentIndex) {
  const returnValue = accumulator + currentValue;

  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}, returnValue: ${returnValue}`
  );

  return returnValue;
}

console.log(arr.reduce(reducer, 10)); // call reduce on the array and provide an initial value of 10.
