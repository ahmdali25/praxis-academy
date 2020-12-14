class Cat {
    constructor(tiredness, hunger, lonliness, happiness) {
       this.tiredness = tiredness;
       this.hunger = hunger;
       this.lonliness = lonliness;
       this.happiness = happiness;
    }

    feed() {
        return this.hunger++;
    }

    sleep() {
        return this.tiredness--;
    }

    pet() {
        if (this.lonliness < 50 && this.happiness < 50) {
            console.log("Paws doesn't want to be petted");
        }
        else {
            console.log("Paws want to be petted");
        }
    }

    catStatus() {
        // Tiredness check
        if (this.tiredness < 50) {
            console.log("Paws is really tired");
        } 
        else {
            console.log("Paws is not tired");
        }

        // Hunger check
        if (this.hunger < 50) {
            console.log("Paws is very hungry");
        }
        else {
            console.log("Paws is not hungry");
        }
    }
}

let cat = new Cat(prompt("Masukkan tiredness"), prompt("Masukkan hunger"), prompt("Masukkan lonliness"), prompt("Masukkan happiness"));
cat.feed();
console.log("Setelah makan energi kucing bertambah " + cat.hunger);
cat.sleep();
console.log("Setelah tidur kelelahan kucing berkurang menjadi " + cat.tiredness)
cat.pet();
cat.catStatus();