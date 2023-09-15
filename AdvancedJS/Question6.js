

/*
6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
*/

function multiply(a, b) {
    console.log(a * b);
}

// Function.prototype.delay = function(ms) {
//     const func = this; // 'this' refers to the function being called

//     return function(...args) {
//         setTimeout(() => {
//             func(...args);
//         }, ms);
//     }
// }

Function.prototype.delay = function (ms) {
    const func = this; // 'this' refers to the function being called
    //console.log(this)
    return (a, b) => setTimeout(() => func(a, b), ms)
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds


// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters

setTimeout(() => console.log("\r\n---Testing original delay function with 2 params --"), 2000);
multiply.delay(2000)(50, 50);
setTimeout(() => console.log("\r\n---Testing original delay function with 2 params --"), 1000)
multiply.delay(1000)(10, 5);


// b) Use apply to improve your solution so that delayed functions can take any number of parameters

Function.prototype.delay2 = function (ms) {
    const func = this;
    //console.log(this)
    return (...args) => setTimeout(() => func.apply(func, args), ms)
}

setTimeout(() => console.log("\r\n---With any number of params --"), 3000)
multiply.delay2(3000)(50, 30);
setTimeout(() => console.log("\r\n---With any number of params --"), 4000)
multiply.delay2(4000)(40, 100);



// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

function multiply2(a, b, c, d) {
    console.log(a * b * c * d);
}

setTimeout(() => console.log("\r\n---4 params --"), 5000)
multiply2.delay2(5000)(50, 100, 200, 3);
setTimeout(() => console.log("\r\n---4 params --"), 6000)
multiply2.delay2(6000)(60, 1000, 200, 3);
