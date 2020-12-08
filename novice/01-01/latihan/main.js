// // Hello World
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

// // Variable
// // String
// let myVariable = 'Bob';
// myVariable = 'Steve';
// console.log(myVariable);

// //Number
// let angka = 10;
// console.log(angka);

// //Boolean
// let bool = true;

// //Array
// let arr = [1,'Bob','Steve',10];
// console.log(arr);

// //Object
// let obj = {
//     nama : 'ali',
//     umur : 21,
//     asal : 'Purworejo'
// }
// console.log(obj);

// // Comment
// /*
// Komen multiline
// */
// // Komen satu baris

// // Operator
// var a = 8;
// var b = 4;
// // Penjumlahan
// console.log(a + b);
// // Pengurangan
// console.log(a - b);
// // Pembagian
// console.log(a/b);
// // Perkalian
// console.log(a*b);
// // Penugasan
// let variabel = 'Alex';
// console.log(variabel);

// // Pengkondisian
// let iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }

// //Function
// function multiply(num1,num2) {
//     let result = num1 * num2;
//     return result;
//   }
// multiply(1,2);

// //Events
// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }