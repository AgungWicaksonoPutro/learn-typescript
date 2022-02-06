"use strict";
// Harus return sesuai type data
function getName() {
    return "Hello World";
}
function getAge() {
    return 12;
}
// Tanpa return
function printAge() {
    console.log(12);
}
printAge();
// Parameter
function multiplyTwoNumber(num1, num2) {
    return num1 * num2;
}
console.log(multiplyTwoNumber(1, 7));
let umur = 1;
// Function implement
const add = (num1, num2) => {
    return num1 + num2;
};
// DEfault Parameter
const isiName = (first, last = "Putro") => {
    return first + " " + last;
};
console.log(isiName("Agung", "Wicaksono"));
// Optional Parameter
const getUmur = (num1, num2) => {
    return num1 + num2;
};
// Number tidak bisa menggunakan optional
