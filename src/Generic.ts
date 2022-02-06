function getData(value: any) {
    return value;
}

console.log(getData("Agung").length);
console.log(getData(1).length);

// Result
// 5
// undefined

// Solution 
function myData<T>(value: T) {
    return value;
}

console.log(myData("Agung").length); //Akan muncul string build function saja
console.log(myData(1).toFixed(1)); //Akan muncul number build function saja


// Case arrow function
const arrowFunction = <T>(value: T) => { //jika menggunakan tsx T, or extend {}
    return value;
}

