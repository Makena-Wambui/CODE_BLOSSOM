// create a multiplication table using nested for loops

// Example output:
// 1 2 3
// 2 4 6
// 3 6 9

function createMultiplicationTable(size) {
  // use a nested for loop to create the pattern
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      process.stdout.write(`${i * j} `);
    }
    console.log();
  }
}

createMultiplicationTable(4);
