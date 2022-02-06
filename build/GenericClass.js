"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...element) {
        this.data.push(...element);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(1, 2, 3, 4);
numbers.add(5); //Harus number yah
numbers.addMultiple(7, 8, 9, 10);
console.log(numbers.getAll());
let random = new List(1, "A", 2, "B");
random.add("Agung"); //Boleh number or string
random.add(21); //Boleh number or string
console.log(random);
