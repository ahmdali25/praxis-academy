//1

// Constructor Function

function Vehicle(make, model, color) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.getName = function () {
        return this.make + " " + this.model;
    }
}

let car = new Vehicle("Toyota", "Corolla", "Black");
let car2 = new Vehicle("Honda", "Civic", "White");
console.log("I have a " + car.make + " car with the " + car.model + " model and it has a " + car.color + " color");
console.log("I have a " + car2.make + " car with the " + car2.model + " model and it has a " + car2.color + " color");

// Classes

class Vehicle2 {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.make + " " + this.model;
    }
}

let motor = new Vehicle2("Honda", "Beat", "Black");
console.log("I have a " + motor.make + " motorcycle with the " + motor.model + " model and it has a " + motor.color + " color");

// Subclasses

class Book {
    constructor(make, author, color) {
        this.name = make;
        this.author = author;
        this.color = color;
    }

    getName() {
        return this.name + " " + this.author;
    }
}

class BookClass extends Book{
    getName(){
        return this.name + " " + this.author + " in child class.";
    }
}

let buku = new BookClass("Tanpa Jejak", "Fiersa Bersari", "Black");

console.log(buku.getName()); // "Honda Accord in child class."

// 2
// Class basic syntax
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
// Class Expression
function makeClass(phrase) {
    // declare a class and return it
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }
  
  // Create a new class
  let User2 = makeClass("Hello");
  
  new User2().sayHi(); // Hello

// Get & Set

class Pengguna {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user4 = new Pengguna("John");
  console.log(user4.name); // John
  
  user4 = new Pengguna(""); // Name is too short.

// 3
// Initializing a class
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}

const hero = new Hero("Valir", 2);
console.log(hero.greet() + " level " + hero.level);

//4

// Example 5: Defining static methods
// ===============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {
  // Using the 'static' keyword creates a method which is associated
  // with a class, but not with an instance of the class.
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());
console.log(Triple.triple(6));
console.log(BiggerTriple.triple(3));