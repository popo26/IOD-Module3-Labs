/*
2. 
The following delayMsg function is intended to be used to delay printing a message until some time has passed.
*/

function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

// a) What order will the four tests below print in? Why?

//Ai: #4 -> #3 -> #2 -> #1 
//Because #4 (synchronous) always has higher priority. Then the rest are all asynchronous and they execute from the one with less delay, which is 0, 20, and 100 in order.

// b) Rewrite delayMsg as an arrow function

const delayMsg2 = (msg) => console.log(`This message will be printed after a delay: ${msg}`)


// c) Add a fifth test which uses a large delay time (greater than 10 seconds) 

setTimeout(delayMsg, 12000, '#5: Delayed by 12000ms');

// d) Use clearTimeout to prevent the fifth test from printing at all.

let cancelledTimerId = setTimeout(delayMsg, 12000, '#5: Delayed by 12000ms');
clearTimeout(cancelledTimerId);