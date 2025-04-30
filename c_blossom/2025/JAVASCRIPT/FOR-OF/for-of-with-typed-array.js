const typedArray = new Uint8Array([1, 2, 3, 4, 5]);

const typedArray2 = new Uint8Array([0x00, 0xff]);
for (const x of typedArray) {
  console.log(x);
}
for (const x of typedArray2) {
  console.log(x);
}
