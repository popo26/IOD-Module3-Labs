/*
5. The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?

---> Ai: when a function relies on context(this) and is passed as a reference instead of being called directly, its context is lost.
*/

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works 
setTimeout(car.description, 200); //fails


// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
setTimeout(() => console.log("\r\n=========Wrapping the call to car.description Ver1========="), 300)
setTimeout(function () { car.description(); }, 300);
setTimeout(() => console.log("\r\n=========Wrapping the call to car.description Ver2========="), 400)
setTimeout(() => car.description(), 400)

// b) Change the year for the car by creating a clone of the original and overriding it

let clonedCar = Object.create(
    Object.getPrototypeOf(car),
    Object.getOwnPropertyDescriptors(car)
)

clonedCar.year = 2000;

console.log("\r\n=========ClonedCar=========")
console.log(clonedCar);
console.log("\r\n=========Original Car=========")
console.log(car);

// c) Does the delayed description() call use the original values or the new values from b)? Why?

/*
AI: From the original values. Because it is using the object, car.
*/

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function

const boundDescriptionMethod = car.description.bind(car);
setTimeout(() => console.log("\r\n=========boundDescriptionMethod========="), 1000)
setTimeout(boundDescriptionMethod, 1000);

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let clonedCar2 = Object.create(
    Object.getPrototypeOf(car),
    Object.getOwnPropertyDescriptors(car)
)

clonedCar2.year = 2090;

console.log("\r\n=========ClonedCar2=========")
console.log(clonedCar2);
console.log("\r\n=========ClonedCar=========")
console.log(clonedCar);
console.log("\r\n=========Original Car=========")
console.log(car);
setTimeout(() => console.log("\r\n=========boundDescriptionMethod========="), 2000)
setTimeout(boundDescriptionMethod, 2000);