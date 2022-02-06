"use strict";
class Vehicle {
    startEngine() {
        console.log("brummm");
    }
}
class Car2 extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car2 = new Car2;
console.log(car2);
car2.startEngine();
