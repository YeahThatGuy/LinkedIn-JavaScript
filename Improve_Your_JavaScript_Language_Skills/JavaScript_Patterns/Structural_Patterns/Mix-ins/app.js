// Mix-ins

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

let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is doing Vroom Vroom!`);
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

// adds the mixin function to the Car class to allow it to use it
Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer("car", "honda");

honda.revEngine();
