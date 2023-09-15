/*
3.
Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, similar requests until there's a brief pause, then only executing the most recent of those requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:

*/

function printMe() {
    console.log('printing debounced message')
}

setTimeout(() => { console.log("\r\n--- Question a)---") }, 1000)
printMe = debounce(printMe); //create this debounce function for a) 

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls 
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call to func should be executed and any others ignored.

function debounce(func) {
    let timeout; // this is private variable only avaialble through closure
    // console.log(this);
    // console.log(func);
    // console.log(`first load timeout variable ${timeout}`)
    return function () { //handler
        //console.log(`second load timeout variable ${timeout}`)
        if (timeout) { //if there is timeout with value exists, it clears out, which ends up running first function.
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func.apply(this, null), 1000);
    }
}


// b) Extend the debounce decorator function to take a second argument ms, which defines the length of the period of inactivity instead of hardcoding to 1000ms

function debounce2(func, ms) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), ms)
    }
}

setTimeout(() => { console.log("\r\n--- Question b)---") }, 5000);
const printMe2 = debounce2(printMe, 5000)

setTimeout(printMe2, 100);
setTimeout(printMe2, 200);
setTimeout(printMe2, 300);

// c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included in the console.log statement.

function printMe10(msg) {
    console.log(msg)
}

function debounce3(func, ms) {
    let timeout;
    return function (...args) {
        //console.log(this)
        //console.log(timeout)
        //console.log(args)
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), ms) //Is 'this' a 'func'? What is context here?
    }
}

setTimeout(() => { console.log("\r\n--- Question c)---") }, 7000)
const printMe3 = debounce3(printMe10, 7000)

setTimeout(printMe3, 100, "One");
setTimeout(printMe3, 200, "Two");
setTimeout(printMe3, 300, "Three");