// Creational patterns - control the creation process of an object.
// Patterns explored - classes, constructor, singleton, factory and abstract factory

// CLASS DESIGN PATTERN
// The prototype class pattern allows us to define a blueprint for a specific type of item, and then reuse it by creating a new object from that class

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

// CONSTRUCTOR PATTERN
// The constructor pattern is one step further from the class pattern, where we leverage a class created to create an extended class from it.
// When you want to create multiple sub-categories of a class, the constructor pattern is a great way to do it.

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}


const civic = new Car(4, "V6", "red");
const cx5 = new SUV(4, "V8", "grey");

console.log(civic);
console.log(cx5);


// SINGLETON PATTERN
// The singleton pattern prevents our class from creating more than one instance of the blue print we've defined.

