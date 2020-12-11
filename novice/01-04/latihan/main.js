// Object

let cars = {
    type: "Honda",
    model: "Jazz",
    color: "Merah"
};
console.log("Saya mempunyai mobil " + cars.type + " model " + cars.model + " berwarna " + cars.color);

// Array

let motor = ["Honda", "Ducati", "Suzuki", "Yamaha"];
for (let i = 0; i < motor.length; i++) {
    console.log(motor[i]);
}

// Iterables
// For of arr
let arr = ["Merah", "Hijau", "Kuning"];
for (let i of arr){
    console.log(i);
}

// Map
let map = new Map();

map.set('Aku', 'string pertama');
map.set('Kamu', 'string kedua');
map.set('Kita', 'string kedua');

console.log(map.get('Aku'));
console.log(map.size);

let user = { name: "John"};
let visitsCountMap = new Map();

visitsCountMap.set(user, 100);
console.log(visitsCountMap.get(user));
console.log(map.has('Aku'));

// Set
let set = new Set();

let ali = { name: "Ali" };
let andi = { name: "Andi" };
let albab = { name: "Albab" };

set.add(ali);
set.add(andi);
set.add(albab);
set.add(ali);
set.add(andi);

console.log(set.size);

for (let user of set){
    console.log(user.name);
}

// Weakmap

// let john = { name: "John" };

// let m = new Map();
// m.set(john, "...");

// john = null; // overwrite the reference
// console.log(m.keys());

let john = { name: "John" };

let wM = new WeakMap();
wM.set(john, "...");

john = null; // overwrite the reference
console.log(wM.get(john));


// Weakset

let visitedSet = new WeakSet();

let viko = { name: "Viko" };
let evan = { name: "Evan" };
let ikhsan = { name: "Ikhsan" };

visitedSet.add(viko); // Viko visited us
visitedSet.add(evan); // Then Evan
visitedSet.add(viko); // Viko again

// visitedSet has 2 users now

// check if Viko visited?
console.log(visitedSet.has(viko)); // true

// check if Mary visited?
console.log(visitedSet.has(ikhsan)); // false

viko = null;

// visitedSet will be cleaned automatically

// Date and Time