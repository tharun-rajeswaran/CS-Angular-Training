// Never Type Example
function throwError(message: string): never {
    throw new Error(message);
}

// Uncommenting the line below will throw an error
throwError("This is an error!");

// Union Type Example
function printId(id: string | number): void {
    console.log("Your ID is:", id);
}

// Calling the function with different types
//printId(123);        // Output: Your ID is: 123
printId("ABC345"); 