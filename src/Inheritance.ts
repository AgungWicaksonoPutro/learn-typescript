export class Customer{
    constructor(public name: string, public age: number){
    }

    setName(name: string){
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }

    setAge(age: number){
        this.age = age;
    }

    getAge = (): number => {
        return this.age;
    }
}


class Admin extends Customer {
    read: boolean = true;
    write: boolean = true;

    getRole(): {read: boolean, write: boolean}{
        return {
            read: this.read,
            write: this.write
        }
    }
}

let admin = new Admin("Agung", 21);


console.log(admin.getName());

console.log(admin.getRole());



