/*
4. 
Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. 
*/
console.log("======First function======");
console.log(camelCase('margin-left')) // marginLeft 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display

// a) The function should remove all dashes, and uppercase the first letter of each word after a dash. 
function camelCase(cssProp) {
    let arr = cssProp.split("-");
    let camelCaseWord = arr[0]
    for (let i = 1; i < arr.length; i++) {
        camelCaseWord += arr[i][0].toUpperCase() + arr[i].slice(1);
    };
    return camelCaseWord;
};


// b) Create variants of the camelCase function that use different types of for loops, and

console.log("");
console.log("======Variant1======");
console.log(camelCase2('margin-left')) // marginLeft 
console.log(camelCase2('background-image')) // backgroundImage 
console.log(camelCase2('display')) // display
console.log(camelCase2()) //"Please enter a string or strings with -(dash) as an argument"

function camelCase2(cssProp) {
    if (!cssProp) {
        return "Please enter a string or strings with -(dash) as an argument";
    } else {
        let arr = cssProp.split("-");
        let camelCaseWord = arr[0];
        for (word of arr) {
            if (arr.indexOf(word) === 0) {
                continue;
            } else {
                camelCaseWord += word[0].toUpperCase() + word.slice(1);
            };
        };
        return camelCaseWord;
    };
};

console.log("");
console.log("======Variant2======");
console.log(camelCase3('margin-left')) // marginLeft 
console.log(camelCase3('background-image')) // backgroundImage 
console.log(camelCase3('display')) // display
console.log(camelCase3()) //"Please enter a string or strings with -(dash) as an argument"

function camelCase3(cssProp) {
    if (!cssProp) {
        return "Please enter a string or strings with -(dash) as an argument";
    } else {
        let arr = cssProp.split("-");
        let camelCaseWord = arr[0];
        let count = 1;
        while (count < arr.length) {
            camelCaseWord += arr[count][0].toUpperCase() + arr[count].slice(1);
            count++;
        }
        return camelCaseWord;
    };
};


// c) with and without the conditional operator.

console.log("");
console.log("======With the conditional operator No1======");
console.log(camelCase4('margin-left')) // marginLeft 
console.log(camelCase4('background-image')) // backgroundImage 
console.log(camelCase4('display')) // display
console.log(camelCase4()) //"Please enter a string or strings with -(dash) as an argument"

function camelCase4(cssProp) {
    if (!cssProp) {
        return "Please enter a string or strings with -(dash) as an argument";
    } else {
        let arr = cssProp.split("-");
        let camelCaseWord = arr[0];
        for (word of arr) {
            (arr.indexOf(word) !== 0) ? camelCaseWord += word[0].toUpperCase() + word.slice(1) : null;
        };
        return camelCaseWord;
    };
};

console.log("");
console.log("======With the conditional operator No2======");
console.log(camelCase5('margin-left')) // marginLeft 
console.log(camelCase5('background-image')) // backgroundImage 
console.log(camelCase5('display')) // display
console.log(camelCase5()) //"Please enter a string or strings with -(dash) as an argument"

function camelCase5(cssProp) {
    if (!cssProp) {
        return "Please enter a string or strings with -(dash) as an argument";
    } else {
        let arr = cssProp.split("-");
        let camelCaseWord = arr[0];
        for (word of arr) {
            (arr.indexOf(word) !== 0) && (camelCaseWord += word[0].toUpperCase() + word.slice(1));
        };
        return camelCaseWord;
    };
};