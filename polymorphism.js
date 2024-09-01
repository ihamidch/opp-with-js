//example of polymorphism
// Polymorphism is a feature of object-oriented programming languages that 
// allows a method to do different things based on the object that it is acting upon.
// In other words, polymorphism allows you to define one interface and have multiple implementations.
// In JavaScript, polymorphism is achieved through method overriding.

class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("Animal makes sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}
const dog = new Dog("Dog");
const cat = new Cat("Cat");
dog.sound(); // Output: Dog barks
cat.sound(); // Output: Cat meows
// In the above example, we have a base class Animal with a sound method.
// We have two derived classes Dog and Cat that inherit from the Animal class.
// Both Dog and Cat classes have their own implementation of the sound method.
// When we call the sound method on an instance of Dog, it will output Dog barks,