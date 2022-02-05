// Harus return sesuai type data
function getName(): String{
    return "Hello World";
}

function getAge(): Number{
    return 12;
}

// Tanpa return
function printAge(): void{
    console.log(12);
}

printAge();

// Parameter

function multiplyTwoNumber(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(multiplyTwoNumber(1,7));


// Function as type

type Age = Number;

let umur:Age = 1;

// Pattern
type sum = (num1: number, num2: number) => number;

// Function implement
const add: sum = (num1: number, num2: number): number => {
    return num1 + num2;
}

// DEfault Parameter
const isiName = (first: string, last: string = "Putro"): string => {
    return first + " " + last;
}

console.log(isiName("Agung", "Wicaksono"));
