/*
9. Given the below salaries object, perform the following tasks.
*/

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
function sumSalaries(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
};
console.log("-------------function sumSlaries(salaries)-------------")
console.log(sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function topEarner(salaries) {
    let highestSalary = 0;
    let highestEarner = "";
    for (let key in salaries) {
        if (salaries[key] > highestSalary) {
            highestSalary = salaries[key];
            highestEarner = key;
        }
    };
    console.log(`Top Earner is ${highestEarner}`);
};


topEarner(salaries);

