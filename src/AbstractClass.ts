abstract class Vehicle {
    abstract wheels: number;

    startEngine(): void {
        console.log("brummm")
    }
}


class Car2 extends Vehicle{
    wheels: number = 4;
}


let car2 = new Car2;

console.log(car2);
car2.startEngine();
