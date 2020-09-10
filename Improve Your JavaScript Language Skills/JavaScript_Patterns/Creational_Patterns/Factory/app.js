// Creational patterns - control the creation process of an object.
// Patterns explored - classes, constructor, singleton, factory and abstract factory

// FACTORY PATTERN
// The factory pattern is great when you want to create, say, a mechanism to create other objects. 
// Good example would be a factory for creating cars. 
// This can be useful when you want a factory to handle most of your classes 
// and then simply use this factory method to create your new objects.


// class Car {
//     constructor(doors, engine, color) {
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }
// }

// class carFactory {
//     createCar(type) {
//         switch(type) {
//             case "civic": 
//                 return new Car(4, "V6", "red")
//             case "honda":
//                 return new Car(2, "V8", "grey")
//         }
//     }
// }

// const factory = new carFactory();
// const myHonda = factory.createCar("honda");

// console.log(myHonda);


// ABSTRACT FACTORY PATTERN
//  If you were to take the concept of factories further. 
// The next step would be the abstract factory pattern. 
// Where you abstract the factories and are able to create multiple factories, classes et cetera.

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case "civic": 
                return new Car(4, "V6", "red");
            case "honda":
                return new Car(2, "V8", "grey");
        }
    }
}

class SUV {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SuvFactory {
    createCar(type) {
        switch(type) {
            case "cx5": 
                return new SUV(4, "V6", "brown");
            case "sante fe":
                return new SUV(4, "V4", "white");
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

// Create the abstract factory that includes the factories Car, SUV, etc.
const autoManufacturer = (type, model) => {
    switch(type) {
        case "car": 
            return carFactory.createCar(model);
        case "suv":
            return suvFactory.createCar(model);
    }
}

const cx5 = autoManufacturer("suv", "cx5");

console.log(cx5);