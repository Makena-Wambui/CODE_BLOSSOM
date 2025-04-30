const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(map);

for (const entry of map) {
  console.log(entry);
}

for (const [k, v] of map) {
  console.log(v);
}
