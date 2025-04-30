// create a rectangle pattern of stars(width: 5, height: 3) using a nested for loop

// *****
// *****
// *****

function createRectangle(width, height) {
  // use a nested for loop to create the pattern
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

createRectangle(5, 3);
