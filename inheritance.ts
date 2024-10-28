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

//Static methods and properties belong to the class itself rather than instances of the class. You can call them without creating an instance.

class MathUtils {
    static PI: number = 3.14;

    static areaOfCircle(radius: number): number {       //static property PI and a static method areaOfCircle
        return MathUtils.PI * radius * radius;
    }
}

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.areaOfCircle(6)); 

// Abstract class
abstract class Animal {     //defined as an abstract class with an abstract method makeSound. This means that any subclass must implement this method.
    abstract makeSound(): string; // Abstract method
}
// Derived class 1 - Cat and Dog both extend the Animal class and provide their own implementation of makeSound.
class Cat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}
// Derived class 2
class Dog extends Animal {
    makeSound(): string {
        return "Woof";
    }
}
const cat = new Cat();
const dog = new Dog();
console.log(cat.makeSound()); // Output: Meow
console.log(dog.makeSound()); // Output: Woof