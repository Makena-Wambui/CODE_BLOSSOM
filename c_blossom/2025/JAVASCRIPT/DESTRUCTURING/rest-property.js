/*
End a destructuring pattern with a ...rest property.

All remaining properties of the object or array will be stored in a new object or array.

The rest property must be the last in the pattern
Can not have a trailing comma after the rest property
*/

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(others); // { b: 2, c: 3 }

const [i, ...values] = [5, 10, 15, 20];
console.log(i); // 5
console.log(values); // [10, 15, 20]

/*
Invalid syntax - rest property must be the last in the pattern
const [j, ...vals, ] = [2, 4, 6, 8]; 
*/
