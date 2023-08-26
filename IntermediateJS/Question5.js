/*
5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
*/

let twentyCents = 0.20;
let tenCents = 0.10;
console.log(`${twentyCents} + ${tenCents}`); //0.2 + 0.1 = 0.30000000000000004;

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

// a) Explain why the above code returns the wrong answer 
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(typeof fixedTwenty);
console.log(typeof fixedTen);
console.log(fixedTwenty + fixedTen); //0.200.10//why is this not working? -- AI: Because toFixed method returns string.
console.log("why is this not working? -- AI: Because toFixed method returns string.")


// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result. 

console.log("");
console.log("==============function currencyAddition(float1, float2)==============")
console.log(currencyAddition(0.35, 1.999));
console.log(currencyAddition(1, 1.999));

function currencyAddition(float1, float2) {
    let fixedFloat1 = parseFloat(float1.toFixed(2));
    let fixedFloat2 = parseFloat(float2.toFixed(2));
    // console.log(fixedFloat1);
    // console.log(fixedFloat2);
    return (fixedFloat1 + fixedFloat2).toFixed(2);
};


// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. 

console.log("");
console.log("==============function currencyOperation(float1, float2, operation)==============")
console.log(currencyOperation(1.2, 2.256, "+"));
console.log(currencyOperation(1.2, 2.256, "-"));
console.log(currencyOperation(1.2, 2.256, "*"));
console.log(currencyOperation(1.2, 2.256, "/"));
console.log(currencyOperation(1.2, 2.256));

function currencyOperation(float1, float2, operation) {
    let fixedFloat1 = parseFloat(float1.toFixed(2));
    let fixedFloat2 = parseFloat(float2.toFixed(2));
    switch (operation) {
        case "+":
            return (fixedFloat1 + fixedFloat2).toFixed(2);
            break;
        case "-":
            return (fixedFloat1 - fixedFloat2).toFixed(2);
            break;
        case "*":
            return (fixedFloat1 * fixedFloat2).toFixed(2);
            break;
        case "/":
            return (fixedFloat1 / fixedFloat2).toFixed(2);
            break;
        default:
            return "No operation selected."
    };
};

// d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

console.log("");
console.log("==============Extend the above function to include a fourth argument numDecimals==============")
console.log(currencyOperation2(1.2, 2.256, "add", 5));
console.log(currencyOperation2(1.2, 2.256, "subtract", 6));
console.log(currencyOperation2(1.2, 2.256, "multiply", 7));
console.log(currencyOperation2(1.2, 2.256, "divide", 8));
console.log(currencyOperation2(1.2, 2.256, 10));

function currencyOperation2(float1, float2, operation, numDecimals) {
    let fixedFloat1 = parseFloat(float1.toFixed(numDecimals));
    let fixedFloat2 = parseFloat(float2.toFixed(numDecimals));
    switch (operation) {
        case "add":
            return (fixedFloat1 + fixedFloat2).toFixed(numDecimals);
            break;
        case "subtract":
            return (fixedFloat1 - fixedFloat2).toFixed(numDecimals);
            break;
        case "multiply":
            return (fixedFloat1 * fixedFloat2).toFixed(numDecimals);
            break;
        case "divide":
            return (fixedFloat1 / fixedFloat2).toFixed(numDecimals);
            break;
        default:
            return "No operation selected."
    };
};



// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below:


console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

console.log(0.32 == currencyAddition(0.11, 0.21)) // true
console.log(0.32 == currencyOperation(0.11, 0.21, '+')) // true

console.log(0.32 == currencyAddition(0.111, 0.211)) // true
console.log(0.32 == currencyOperation(0.111, 0.211, '+')) // true

