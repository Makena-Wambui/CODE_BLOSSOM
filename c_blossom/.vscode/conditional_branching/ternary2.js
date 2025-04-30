let i = true;
let a = 10;
let b = 10;

if (!(i === true)) {
  a++;
  b++;
} else {
  a--;
  b--;
}

console.log("a:", a, "b:", b);

let c = 5;
let d = 6;
i === true ? (c++, d++) : ((c = c), (d = d));
console.log("c:", c, "d:", d);
