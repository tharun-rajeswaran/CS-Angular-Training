/*
// Base class
class Animal {
    constructor(public name: string) {}

    speak(): string {
        return `${this.name} makes a noise.`;
    }
}

// Derived class        //overrides the speak method to provide specific behavior.
class Dog extends Animal {
    speak(): string {
        return `${this.name} barks.`;
    }
}

const dog = new Dog("Rex"); //this instance uses the overidden method
console.log(dog.speak()); // Output: Rex barks.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
//Static methods and properties belong to the class itself rather than instances of the class. You can call them without creating an instance.

class MathUtils {
    static PI: number = 3.14;

    static areaOfCircle(radius: number): number {       //static property PI and a static method areaOfCircle
        return MathUtils.PI * radius * radius;
    }
}

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.areaOfCircle(6));
*/
// Abstract class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// Derived class 1
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow";
    };
    return Cat;
}(Animal));
// Derived class 2
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Woof";
    };
    return Dog;
}(Animal));
var cat = new Cat();
var dog = new Dog();
console.log(cat.makeSound()); // Output: Meow
console.log(dog.makeSound()); // Output: Woof
