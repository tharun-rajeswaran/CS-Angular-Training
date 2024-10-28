class Human {           // Define a new class
    name: string;
    age: number;

    constructor(name: string, age: number) {    //Constructor - Special Method to create and initialize object created from the class
        this.name = name;
        this.age = age;
    }

    greet(): string {   // method to return a greeting string
        return `Hey, I am ${this.name} and I am ${this.age} years old.`;
    }
}

const human1 = new Human("Tharun", 24);     //New instance of Human Class
console.log(human1.greet()); 



class Employee {        //Access modifiers control the visibility of class members
    private id: number;
    public name: string;
    protected role: string;

    constructor(id: number, name: string, role: string) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    public getId(): number {    //public method to access private id.
        return this.id;
    }
}

const emp1 = new Employee(1, "Tharun", "Data Engineer");
console.log(emp1.name); // Accessible
//console.log(emp1.role); //Property 'role' is protected and only accessible within class 'Employee' and its subclasses.
//console.log(emp1.id); // Error: Property 'id' is private
console.log(emp1.getId()); // Works: accessing private id through public method



class Product {
    readonly id: number;    //readonly modifier prevents a property from being modified after it's initialized.
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const product1 = new Product(1001, "Mobile Phone");
console.log(product1.id);
//product1.id = 1002; // Error: Cannot assign to 'id' because it is a readonly property


class Square {      //allow you to define how properties are accessed and modified.
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    get area(): number {
        return this.side * this.side;
    }

    set sideValue(newSide: number) {
        if (newSide > 0) {
            this.side = newSide;
        } else {
            console.error("Side length must be positive.");
        }
    }
}

const square = new Square(9);
console.log(square.area); // Area of Square

square.sideValue = 11; // Set new side
console.log(square.area); // New area of square