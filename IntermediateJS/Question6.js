/*
6. 
Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
Test with the following arrays and create another one of your own.
*/

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow','orange' ] 
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]


//filter method
function unique(duplicatesArray) {
    let noDupArray = duplicatesArray.filter(function (item, index, duplicatesArray) {
        // It returns the index of the first instance of each value
        return index == duplicatesArray.indexOf(item);
    });
    return noDupArray;
};

//ForEach

console.log(unique2(colours)); // [ 'red', 'green', 'blue', 'yellow','orange' ] 
console.log(unique2(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique2(duplicatesArray) {
    let noDupArray = [];
    duplicatesArray.forEach(el => {
        if (!noDupArray.includes(el)) {
            noDupArray.push(el);
        }
    });
    return noDupArray;
};

//indexOf

console.log(unique3(colours)); // [ 'red', 'green', 'blue', 'yellow','orange' ] 
console.log(unique3(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique3(duplicatesArray) {
    let noDupArray = [];
    for (i = 0; i < duplicatesArray.length; i++) {
        if (noDupArray.indexOf(duplicatesArray[i]) === -1) {
            noDupArray.push(duplicatesArray[i]);
        }
    }
    return noDupArray;
};

