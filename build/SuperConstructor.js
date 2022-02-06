"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(merk, color) {
        this.merk = merk;
        this.color = color;
    }
}
exports.Car = Car;
class Honda extends Car {
    constructor(fuel, merk, color) {
        super(merk, color);
        this.fuel = fuel;
    }
}
