const items = ["item1", "item2", "item3"];

const copiedArray = [];

// with for loop
for (let i = 0; i < items.length; i++) {
  // we add each element in items to copiedArray
  copiedArray.push(items[i]);
}

console.log(copiedArray);

const array = ["d", "e", "f"];
const array2 = ["a", "b", "c"];

// with forEach
array.forEach((element) => array2.push(element));

console.log(array2);
