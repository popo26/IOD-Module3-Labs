// Which of the below are not giving the right answer? Why are they not correct? How can we fix them? --> Change the first 3 variables with string into number

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions? 
let addition = three + four   // 7 ///Correct Answer: 34
let multiplication = three * four  // 12
let division = three / four // 0.75
let subtraction = three - four // -1


let lessThan1 = three < four // true
let lessThan2 = thirty < four // false ///Correct Answer: true

console.log(lessThan2);