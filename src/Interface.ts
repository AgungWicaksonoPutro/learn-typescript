interface Laptop {
    on(): void;
    off(): void;
    name: string;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name:string, isGaming: boolean){
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log("start on");
        
    }
    off(): void {
        console.log("start off");
        
    }
}

let asus = new Asus("Asus", true);

console.log(asus.name);
asus.on();

class Mackbook implements Laptop{
    name: string;
    blinkKeyboard: boolean;

    constructor(name:string, blinkKeyboard: boolean){
        this.name = name;
        this.blinkKeyboard = blinkKeyboard;
    }

    on(): void {
        throw new Error("Start on");
    }
    off(): void {
        throw new Error("Start off");
    }
}
