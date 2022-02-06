"use strict";
class Car {
    constructor(color, merk) {
        this.color = color;
        this.merk = merk;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setMerk(merk) {
        this.merk = merk;
    }
    getMerk() {
        return this.merk;
    }
}
let car1 = new Car("white", "crv");
car1.setColor("red");
console.log(car1);
console.log(car1.getColor());
