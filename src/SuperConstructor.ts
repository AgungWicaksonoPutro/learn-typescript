export class Car {
    constructor(public merk:string, public color: string){
    }
}

class Honda extends Car {
    fuel:string;

    constructor(fuel:string, merk:string, color:string){
        super(merk, color);
        this.fuel = fuel;
    }
}