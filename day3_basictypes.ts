//Array

let numbers: number[] = [];

numbers.push(1);
numbers.push(2);
numbers.push(3);

console.log("Length of Array",numbers.length);

console.log("Numbers in Array:",numbers);

let tripled = numbers.map(num => num * 3);
console.log("Tripled Values:", tripled);

//Tuple

let person: [string, number] = ["Tharun", 24];

console.log("Person Tuple:");
console.log(`Name: ${person[0]}, Age: ${person[1]}`);

person[1] = 25;
console.log("Updated Age:", person[1]);

//enum

enum ApprovalStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
}

console.log("Approval Status Enum Values:");
console.log(ApprovalStatus.Pending);

//any

let randomValue: any;

randomValue = "This is a string";
console.log("Random Value:", randomValue);

// Void Function Example
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Call the function
greet("Tharun");