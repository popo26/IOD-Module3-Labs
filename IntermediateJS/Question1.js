/*
1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.
*/

console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) {
 return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirstLetters("good morning"));