// Replace
const greet = R.replace('{name}', R.__, 'Hello, {name}!');
console.log(greet('Ali')); //=> 'Hello, Ali!'

// Filter
const isEven = n => n % 2 === 0;
const a = R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
const b = R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
console.log(a, b);

// Map
const double = x => x * 2;
const A = R.map(double, [1, 2, 3]); //=> [2, 4, 6]
const B = R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
console.log(A, B);