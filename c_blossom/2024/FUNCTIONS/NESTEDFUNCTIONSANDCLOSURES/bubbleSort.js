function bubbleSort(arr) {
  let i;
  for (i = 0; i < arr.length; i++) {
    console.log(`Pass Number: ${i}`);
    let isSwapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      console.log(`Commparison Number: ${j}`);
      if (arr[j] < arr[j - 1]) {
        // swap the elements
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

let arr = [4, 0, -1, 10, 2, 3];
console.log(bubbleSort(arr));
