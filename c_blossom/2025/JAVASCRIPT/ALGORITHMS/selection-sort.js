function selectionSort(array) {
  console.log(`Before sorting: ${array}`);
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[minIndex] < array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  console.log(`After sorting: ${array}`);
}

const array = [9, 15, 0, -1, 6, -2, 5];
selectionSort(array);
