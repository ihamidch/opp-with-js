//abstraction is the process of hiding the implementation details and showing only the functionality to the user.
// In JavaScript, we can achieve abstraction using classes and methods.
// We can create a base class with abstract methods that must be implemented by the derived classes.
// Here's an example of abstraction in JavaScript:
//example of abstraction
class Student {
    constructor(name) {
        this.name = name;
    }
    display() {
        throw new Error("Method 'display()' must be implemented.");
    }
}
class CollegeStudent extends Student {
    display() {
        console.log(`Name: ${this.name}`);
    }
}
const student = new CollegeStudent("John");
student.display(); // Output: Name: John
// In the above example, we have a base class Student with an abstract method display.
// The display method is marked as abstract by throwing an error in the base class.
// We have a derived class CollegeStudent that inherits from the Student class and implements the display method.
// When we create an instance of CollegeStudent and call the display method, it will output the name of the student.
// If we try to create an instance of the base class Student without implementing the display method, it will throw an error.
// This is how we can achieve abstraction in JavaScript using classes and methods.
