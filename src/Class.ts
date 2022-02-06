class User {
    public name:string;

    constructor(name:string){
        this.name = name;
    }
}

let user1 = new User("Agung");

console.log(user1);

// Or 

class CustomerOne {
    constructor(public name: string) {
    }
}

let customerOne = new CustomerOne("John");

console.log(customerOne);
