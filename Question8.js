/*
8. The object below represents a single city.
*/

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

// b) Create a new object for a different city with different properties and call your function again with the new object.
const studentA = {
    id: 777,
    firstName: "Lou",
    lastName: "Xin",
    age: 26,
    nationality: "Chinese",
}

// a) Write a function that takes an object as an argument and uses a for…in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.

function showObject(obj) {
    for (let key in obj) {
        console.log(`Key: ${key}. Value: ${obj[key]}`);
    }
}

showObject(sydney);
showObject(studentA);