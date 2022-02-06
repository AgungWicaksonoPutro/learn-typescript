class Car {
    private color:string;
    private merk:string;

    constructor(color:string, merk:string){
        this.color = color;
        this.merk = merk;
    }

    setColor(color:string){
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }

    setMerk(merk:string){
        this.merk = merk;
    }

    getMerk(): string {
        return this.merk;
    }
}

let car1 = new Car("white", "crv");

car1.setColor("red");

console.log(car1);
console.log(car1.getColor());

