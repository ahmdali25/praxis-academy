// Pengkondisian
// if else

var a = 2;
if (a % 2 == 0){
    console.log(a + ' adalah bilangan genap');
}
else{
    console.log(a + ' adalah bilangan ganjil');
}

//Switch case

var fruittype = 'Oranges';
switch (fruittype) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
     console.log(`Sorry, we are out of ${fruittype}.`);
  }
  console.log("Is there anything else you'd like?");

//Perulangan
//For
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

//Do while
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

// While
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(x);
}

//For with break
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log(i);
}

// While with continue
let j = 0;
let k = 0;
while (j < 5) {
  j++;
  if (j === 3) {
    continue;
  }
  k += j;
  console.log(k);
}