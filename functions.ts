//basic function

function subtract(x: number, y: number): number{
    return x-y;
}

const resultSub = subtract (54321,12345);
console.log("Result:",resultSub);

//function with optional parameter

function addition(a: number, b: number, c: number,d?:number): number {
    if (d !== undefined) {
        return a + b + c +d;
    } else {
        return a + b +c; 
    }
}

const resultAdd1 = addition(9, 99, 999);          
const resultAdd2 = addition(9, 99, 999, 9999);     

console.log("Sum (3 numbers):", resultAdd1); 
console.log("Sum (4 numbers):", resultAdd2);