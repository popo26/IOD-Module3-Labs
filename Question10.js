/*
The following constructor function creates a new Person object with the given name and age values.
c) Print out the properties of each person object to the console -- Ai:Added
e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive. -- Ai;Added
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age > 15;
}

//    a) Create a new person using the constructor function and store it in a variable

let personA = new Person("Lala", 12);
console.log(personA);
console.log(personA.canDrive());


// b) Create a second person using different name and age values and store it in a separate variable

let personB = new Person("Lulu", 34);
console.log(personB);
console.log(personB.canDrive());


// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = () => this.age > 15;
    }
}

let personC = new PersonClass("Lili", 45);
console.log(personC);
console.log(personC.canDrive());

