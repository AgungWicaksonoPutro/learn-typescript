"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.getAge = () => {
            return this.age;
        };
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
exports.Customer = Customer;
class Admin extends Customer {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
}
let admin = new Admin("Agung", 21);
console.log(admin.getName());
console.log(admin.getRole());
