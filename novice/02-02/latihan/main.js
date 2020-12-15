// Functional Programming
// example 1
console.log("Filtering ");
let meetups = [
    {name:'Javascript', isActive:true, members:450},
    {name:'Angular', isActive:false, members:900},
    {name:'Vue', isActive:true, members:500},
    {name:'React', isActive:true, members:700},
    {name:'Node', isActive:false, members:600},
];
console.log("from this array:");
console.log(meetups);
/* Imperative--Focuses on describing how program operates */
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++) {
    let m = meetups[i];
    if (m.isActive) {
        activeMeetups.push(m);
    }
}
console.log("to this:");
console.log(activeMeetups);
// Output will be array of 2 elements where isActive is true

/* Declarative--Focuses on what the program should accomplish */
let activeMeetupsFP = [];
activeMeetupsFP = (meetups.filter((m) => {
    return m.isActive;
}));

console.log(activeMeetupsFP);

// example 2
// Imperative

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]

// Declarative

function smaller(number) {
    return number < this;
}
  
function filterArray(x, listOfNumbers) {
    return listOfNumbers.filter(smaller, x);
}
  
let nums = [10, 9, 8, 2, 7, 5, 1, 3, 0];
  
filterArray(3, nums); // [2, 1, 0]

// example 3

// Imperative
const doubleMap = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled;
};
  
console.log(doubleMap([2, 3, 4])); // [4, 6, 8]

// Declarative
const doubleMap2 = numbers => numbers.map(n => n * 2);
console.log(doubleMap2([2, 3, 4])); // [4, 6, 8]

// example 4
// Currying

function multiply (a, b, c) { 
    return a * b * c; 
}

console.log(multiply(1,2,3)); // 6

function multiply2(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
console.log(multiply2(1)(2)(3)) // 6