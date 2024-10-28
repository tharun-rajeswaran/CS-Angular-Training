//Modules are a way to organize your TypeScript code into separate files. Each file can export variables, functions, or classes and import them in other files.

export abstract class Shape {
    abstract perimeter(): number;

    describe(): string {
        return `This is a shape with a perimeter of ${this.perimeter()}.`;
    }
}

export class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

//we define the Shape abstract class and the Circle class, both of which are exported.