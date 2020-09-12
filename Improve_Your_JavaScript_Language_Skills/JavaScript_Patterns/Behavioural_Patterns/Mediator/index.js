// MEDIATOR PATTERN
// The mediator pattern provides a set of objects 
// which interact with each other, mostly by having a central authority 
// dictating the terms in between objects.

class TrafficTower {
    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane{
    constructor(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}
