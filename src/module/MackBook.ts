import BaseLaptop from "./BaseLaptop";

class Mackbook<T> extends BaseLaptop<T>{
    constructor(type: T, withNumeric: boolean, withTouchButton: boolean){
        super("Mackbook", type, withNumeric, withTouchButton);
    }
}

export default Mackbook;