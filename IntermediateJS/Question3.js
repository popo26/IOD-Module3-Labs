/*
3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
*/

const animals = ['Tiger', 'Giraffe'];
console.log(animals);


// a) Add 2 new values to the end 
animals.push("Bird", "Cat");
console.log(animals);


// b) Add 2 new values to the beginning 
animals.unshift("Dog", "Koala");
console.log(animals);


// c) Sort the values alphabetically 
console.log(animals.sort());


// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
function replaceMiddleAnimal(newValue) {
    //if animals array is empty, newValue is simply added.
    if (animals.length < 1) {
        animals.push(newValue);
    } else {
        const midOfArrayIndex = Math.floor(animals.length / 2) - 1;
        animals[midOfArrayIndex] = newValue;
    };
    return animals;
};
console.log(replaceMiddleAnimal("Drop Bear"));

/*
// Test code in case of empty array
arrayPractice = [];
console.log(!arrayPractice);
console.log(!arrayPractice.length);
console.log(arrayPractice.length < 1);

function replaceMiddleArray(newValue) {
    //if animals array is empty, newValue is simply added.
    if (arrayPractice.length < 1 ) {
        arrayPractice.push(newValue);
    } else {
        const midOfArrayIndex = Math.floor(animals.length / 2) - 1;
        arrayPractice[midOfArrayIndex] = newValue;
    };
    return arrayPractice;
};
console.log(replaceMiddleArray("Test"));
*/



// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

function findMatchingAnimals(beginsWith) {
    if (!beginsWith) {
        return "You missed to enter a string or character as argument";
    } else if (Number(beginsWith)) {
        return "The argument has to be a string or character";
    } else {
        const lowerBeginsWith = beginsWith.toLowerCase();
        const matchedAnimals = animals.filter(animal => {
            const lowerAnimal = animal.toLowerCase();
            const lowerAnimals = lowerAnimal.startsWith(lowerBeginsWith);
            return lowerAnimals;
        });
        return matchedAnimals;
    };
};

console.log(findMatchingAnimals("ti"));
console.log(findMatchingAnimals("T"));
console.log(findMatchingAnimals());
console.log(findMatchingAnimals(26));
console.log(findMatchingAnimals(21112e20));

