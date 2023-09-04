/*
1. 
makeCounter below is a decorator function which creates and returns a function that increments a counter.
*/

function makeCounter() {
    let currentCount = 0;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();

counter1(); // 1 
counter1(); // 2

// a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1

let counter2 = makeCounter();

console.log("\r\n----Counter2----");
counter2();
counter2();
console.log("\r\n----Counter1----");
counter1();
counter1()

// b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)

function makeCounter2(startFrom) {
    let currentCount = startFrom;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter3 = makeCounter2(10);

console.log("\r\n----Counter3----");
counter3();
counter3();


// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

function makeCounter3(incrementBy) {
    let currentCount = 0;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
};

let counter4 = makeCounter3(100);

console.log("\r\n----Counter4----");
counter4();
counter4();