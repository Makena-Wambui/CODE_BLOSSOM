/*
c.Write a JavaScript program to get the volume of a cylindrical with four decimal places using
object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
*/

class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  volume() {
    return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
  }
}

const cylinder = new Cylinder(10, 4);
console.log(cylinder.volume()); // 502.6548
