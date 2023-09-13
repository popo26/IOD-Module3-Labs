//Ai's REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString


/*
7. In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something like [object Object].
However, we can define our own toString methods for custom objects to provide a more meaningful string representation.
*/


function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    // Object.prototype.toString = function () {
    //     return `This is ${this.name}, ${this.age} years old, and ${this.gender}`;
    //} This was mistake because it is changing the toString method for Object itself.
}

const person1 = new Person('James Brown', 73, 'male')
console.log('person1: ' + person1) //prints person1: [object Object]

// a) Define a custom toString method for the Person object that will format and print their details

Person.prototype.toString = function personToString() {
    return `This is ${this.name}, ${this.age} years old, and ${this.gender}`;
}

console.log("\r\n-----------------After creationg of custom toString method for Person object-----------------")
console.log(person1.toString()) //Without string, it just shows whole object. Person { name: 'James Brown', age: 73, gender: 'male' }

console.log("-----------------'person1: ' + person1-----------------")
console.log('person1: ' + person1)
console.log("-----------------person1-----------------")
console.log(person1)

// b) Test your method by creating 2 different people using the below constructor function and printing them

console.log("\r\n-----------------Test of 2 more Person objects-----------------")

const person2 = new Person('Ai Oakenfull', 50, 'female');
const person3 = new Person('Kewpie Oake', 20, 'male');

console.log("-----------------'person2.toString()' & 'person3.toString()'-----------------")
console.log(person2.toString());
console.log(person3.toString());
console.log("-----------------'person2' & 'person3'-----------------")
console.log(person2);
console.log(person3);


// c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort

function Student(name, age, gender) {
    Person.call(this, name, age, gender);
    this.cohort = true;
    // Object.prototype.toString = function () {
    //     return `${this.name} is a student. ${this.age} years old and ${this.gender}. Cohort: ${this.cohort}`
    //} This was mistake because it is changing the toString method for Object itself.
}

Student.prototype.toString = function studentToString() {
    return `${this.name} is a student. ${this.age} years old and ${this.gender}. Cohort: ${this.cohort}`
};

const student1 = new Student("Kirin Smith", 12, 'female');
const student2 = new Student("Tory Smith", 14, 'female');



// d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.

console.log("\r\n--------After creationg of custom toString method for Student object-----")
console.log(student1.toString())
console.log(student2.toString())
console.log("\r\n-----------------student1 & student2-----------------")
console.log(student1)
console.log(student2)

console.log("\r\n----Checking if studentToString method affected personToString method-----")
console.log(person1.toString())
console.log("\r\n-----------------person1-----------------")
console.log(person1)

