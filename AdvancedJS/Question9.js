/*
9. We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.
*/

// function randomDelay() {
//     // your code
// }

// randomDelay().then(() => console.log('There appears to have been a delay.'));

// a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) and returns a promise we can use via .then(), as in the starter code below

function randomDelay2() {
    return new Promise(function (resolve, reject) {
        let a = 1 + 1;
        const delay = Math.random() * (20000 - 1000 + 1) + 1000;
        if (a === 2) {
            setTimeout(() => resolve("Hi this is success"), delay)
        }
    })
}

randomDelay2().then(() => console.log('There appears to have been a delay.'));

// b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number is odd, consider this a failure and reject it

function randomDelay3() {
    return new Promise(function (resolve, reject) {
        const delay = Math.floor(Math.random() * (20000 - 1000 + 1) + 1000);
        if (delay % 2 === 0) {
            setTimeout(() => resolve(`Success. Delay is ${delay} millisecs`), delay)
        } else {
            setTimeout(() => reject(`Failure. Delay is ${delay} millisecs`), delay)
        }
    })
}

randomDelay3()
    .then((message) => console.log('Success/Even Delay: ', message))
    .catch((message) => console.log("Failure/Odd Delay: ", message));

// c) Update the testing code to catch rejected promises and print a different message

//Ai : Covered by my answer in b)

// d) Try to update the then and catch messages to include the random delay value

function randomDelay4() {
    return new Promise(function (resolve, reject) {
        const delay = Math.floor(Math.random() * (20000 - 1000 + 1) + 1000);
        if (delay % 2 === 0) {
            setTimeout(() => resolve(delay), delay)
        } else {
            setTimeout(() => reject(delay), delay)
        }
    })
}

randomDelay4()
    .then((message) => console.log(`Success/Even Delay: ${message}`))
    .catch((message) => console.log(`Failure/Odd Delay: ${message}`));

