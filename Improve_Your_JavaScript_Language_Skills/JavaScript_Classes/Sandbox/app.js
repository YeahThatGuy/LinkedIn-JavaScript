// Classes aren't hoisted, meaning they are not put at the top as functions. Instantiating an object before class declaration outputs a ReferenceError
// const cx5 = new Car(4, "V5", "red");

// console.log(cx5);
// console.log(cx5.carStats());
// sayHi();

// When you want to extend a class, create a new one you can only extend one at a time and in most cases that will be enough but sometimes you might need to extend more than one class into a single class, this is where mixins are useful. As for the Gang of Four this is one pattern where we favor composition over inheritance. With extends we inherit from the parent class with mixins we compose into a new class.
// Mixins are frowned upon and overly verbose
let mixin = {
    madeIn() {
        console.log("This car was made in year 2019");
    }
}

let carMixin = {
    __proto__: mixin,

    madeIn() {
        super.madeIn();
    }
}

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} and a beautiful ${this.color}.`;
    }

    //Static methods are methods that aren't accessible through an instance of a class, but only available through the class itself. They are usually created for utility functions that don't relate to the instance of the class.
    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

class SUV extends Car {
    constructor(doors, engine, color, brand, carStats) {
        super(doors, engine, color, carStats);
        this.brand = brand;
        // Can also add constructor fields separately outside the "constructor" with this."field"
        this.wheels = 4;
        this.ac = true;

        // Assign mixin through composition
        Object.assign(this, carMixin);
    }

    myBrand() {
        return console.log(`This SUV is a ${this.brand}.`);
    }
}

const cx5 = new SUV(4, "V5", "red", "Mazda");
const civic = new Car(2, "V4", "blue");

console.log(cx5);
console.log(cx5.carStats());
cx5.myBrand();
cx5.madeIn();
// console.log(cx5.carStats());
// console.log(civic);
// console.log(civic.carStats());
// console.log(Car.totalDoors(cx5, civic));

// function sayHi() {
//     return console.log("Hi, I'm hoisted at the top, so can be called anywhere.");
// }