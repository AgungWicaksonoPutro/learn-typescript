"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("start on");
    }
    off() {
        console.log("start off");
    }
}
let asus = new Asus("Asus", true);
console.log(asus.name);
asus.on();
class Mackbook {
    constructor(name, blinkKeyboard) {
        this.name = name;
        this.blinkKeyboard = blinkKeyboard;
    }
    on() {
        throw new Error("Start on");
    }
    off() {
        throw new Error("Start off");
    }
}
