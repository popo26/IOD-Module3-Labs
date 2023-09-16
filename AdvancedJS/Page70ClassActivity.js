/*
Work through the following exercises to practice some of these advanced JS concepts:

Mimic a pizza making procedure, by writing code that prints statements in the below order:

Started preparing pizza ...
Made the base
Added the sauce and cheese
Added the pizza toppings
Cooked the pizza
Pizza is ready
*/

// Task 1: Create 6 JS functions which print the pizza processing
// statements and call those functions in sequence. Use a mix of
// function declarations, expressions and arrow functions.

function startPreparation() {
    console.log("Started preparing pizza ...")
}

function madeBase() {
    console.log("Made the base");
}

const addedSauceAndCheese = function () {
    console.log("Added the sauce and cheese");
}

const addedPizzaToppings = function addedPizzaToppings2() {
    console.log("Added the pizza toppings");
}

const cookedPizza = () => console.log("Cooked the pizza");

const pizzaReady = (() => {
    console.log("Pizza is ready")
});

console.log("\r\n-----Task1-----")
startPreparation();
madeBase();
addedSauceAndCheese();
addedPizzaToppings()
cookedPizza();
pizzaReady();


// Task 2: Make the functions asynchronous by using setTimeout with
// different time durations, maintaining the right order.

console.log("\r\n-----Task2-----")
setTimeout(startPreparation, 100);
setTimeout(madeBase, 200);
setTimeout(addedSauceAndCheese, 300);
setTimeout(addedPizzaToppings, 400);
setTimeout(cookedPizza, 500);
setTimeout(pizzaReady, 600);

// Task 3: Modify the asynchronous functions to use Promises and
// achieve the required result.

const promise = new Promise((resolve) => {
    if (resolve) {
        setTimeout(() => console.log("\r\n-----Task3-----"), 900)
        setTimeout(startPreparation, 1000);
        setTimeout(madeBase, 1100);
        setTimeout(addedSauceAndCheese, 1200);
        setTimeout(addedPizzaToppings, 1300);
        setTimeout(cookedPizza, 1400);
        setTimeout(pizzaReady, 1500);
    };
});

promise.then((result) => console.log(result));


// Task 4: Modify the functions to use async/await and achieve the
// required result.

//Ai's ref: https://stackoverflow.com/questions/51200626/using-a-settimeout-in-a-async-function
async function pizzaProcess() {
    await new Promise(resolve => {
        setTimeout(() => console.log("\r\n-----Task4-----"), 1700)
        setTimeout(startPreparation, 1800);
        setTimeout(madeBase, 1900);
        setTimeout(addedSauceAndCheese, 2000);
        setTimeout(addedPizzaToppings, 2100);
        setTimeout(cookedPizza, 2200);
        setTimeout(pizzaReady, 2300);
    })
}

// When I do below linter says "await" has no effect.
// async function pizzaProcess() {
//     try {
//         setTimeout(() => console.log("\r\n-----Task4-----"), 1700)
//         await setTimeout(startPreparation, 1800);
//         await setTimeout(madeBase, 1900);
//         await setTimeout(addedSauceAndCheese, 2000);
//         await setTimeout(addedPizzaToppings, 2100);
//         await setTimeout(cookedPizza, 2200);
//         await setTimeout(pizzaReady, 2300);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

console.log(pizzaProcess());