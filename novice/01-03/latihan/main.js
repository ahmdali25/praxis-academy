// Function Declaration
// tanpa parameter
function hello(){
    console.log("Hello World !");
}
hello();

// dengan parameter
function greeting(x){
    console.log(x);
}
greeting("Good Morning!");

// dua parameter
function greetingTwo(x,y){
    console.log(x,y);
}
greetingTwo("Good Morning", "Ali!");

//Function expression , anonymous function
let show = function () {console.log('Hello!')};
show();

//Function expression dengan parameter
let myName = function (name) {console.log(name)};
myName("Ali");

// Arrow Function Expression
// tanpa param
let x = () => console.log(true);
x();

// dengan param
let y = (a) => console.log(a);
y('satu parameter');

// dua param
let z = (a,b) => {
    console.log(a,b);
}
z(1,2);

// Closure

//tanpa param
function init() {
    let toolsName = "Mozilla"; 
    function displayName() { 
        console.log(toolsName);
    }
    displayName();    
}
init();

// dengan param
function myFunc(firstName, lastName) {
    function getFullName() {
        console.log(firstName, lastName);
    }
    getFullName();
}
myFunc('Ahmad', 'Ali');

// Hoisting

function exampleScope() {
    foo(); // => "Hello, world!"
  
    function foo() {
      console.log("Hello, world!");
    }
}
exampleScope();