// Creational patterns - control the creation process of an object.
// Patterns explored - classes, constructor, singleton, factory and abstract factory

// SINGLETON PATTERN
// The singleton pattern prevents our class from creating more than one instance of the blue print we've defined.
// FLYWEIGHT PATTERN
// Prevents the creation of more images in the memory

let instance = null;

class Car {
    constructor(doors, engine, color) {
        if(!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance;
        }
    }
}

// class SUV extends Car {
//     constructor(doors, engine, color) {
//         super(doors, engine, color);
//         this.wheels = 4;
//     }
// }


const civic = new Car(4, "V6", "red");
// The second instance won't be created due to the singleton pattern preventing that through the instance variable and if statement..instead it will return the first instance
const honda = new Car(2, "V8", "grey");

console.log(civic);
console.log(honda);
