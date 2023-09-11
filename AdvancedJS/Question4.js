/*
4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
*/

// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

function printFibonacci(arr) {
    let index = 0;
    let end = setInterval(function () {
        console.log(arr[index++]);
        if (index === arr.length) {
            clearInterval(end)
        }
    }, 1000)
}

//generate Fibo numbers till 20
function Fibo() {
    let arr = [];
    let currentNum;
    let prevNum;
    let prev2Num;
    let initial = 1
    for (let i = 1; i < 10; i++) {
        if (i === 1) {
            currentNum = initial;
        } else if (i === 2) {
            currentNum = 0 + initial;
        } else if (i > 2) {
            prevNum = arr[i - 2]
            prev2Num = arr[i - 3]
            currentNum = prevNum + prev2Num;
        }
        arr.push(currentNum)
    }
    return arr;
}

const result = Fibo();
// printFibonacci(result)

// //generate infinite Fibo number
// function FiboInfinate() {
//     let counter = 0;
//     let arr = [];
//     while (true) {
//         let currentNum;
//         let prevNum;
//         let prev2Num;
//         let initial = 1
//         if (counter === 1) {
//             currentNum = initial;
//         } else if (counter === 2) {
//             currentNum = 0 + initial;
//         } else if (counter > 2) {
//             prevNum = arr[counter - 2]
//             prev2Num = arr[counter - 3]
//             currentNum = prevNum + prev2Num;
//         }
//         arr.push(currentNum)
//         counter++;
//         return arr;
//     }
// }

// const result2 = FiboInfinate();

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing

function printFibonacciTimeouts(arr) {
    let index = 0;
    //console.log(index)
    setTimeout(function repeatThis(index) {
        console.log(arr[index++]);
        if (index < arr.length) {
            setTimeout(repeatThis, 1000, index++)
        }
    }, 1000, index);
}

//printFibonacciTimeouts(result)

//c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

function printFibonacciTimeoutsLimit(arr, limit) {
    let index = 0;
    setTimeout(function repeatThis(index) {
        console.log(arr[index++]);
        if (limit < arr.length) {
            if (index < limit) {
                setTimeout(repeatThis, 1000, index++)
            }
        } else if (limit > arr.length) {
            if (index < arr.length) {
                setTimeout(repeatThis, 1000, index++)
            }
        }

    }, 1000, index);
}

//printFibonacciTimeoutsLimit(result, 3)