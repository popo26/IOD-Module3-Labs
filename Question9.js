
/*
Use the following variables to understand how JavaScript stores objects by reference.
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why? - Ai:Comment added.
*/


// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports;
moreSports.push("Basketball");

console.log(moreSports); //Because of array (not primitive data), new variable is referencing original variable (exact same)
console.log(teamSports);

// b) Create a new dog2 variable equal to dog1 and give it a new value
let dog2 = dog1;
dog2 = "Ollie";

console.log(dog2);
console.log(dog1); // Because of primitive type, new variable is not referencing original variable


// c) Create a new cat2 variable equal to cat1 and change its name property
let cat2 = cat1;
cat2['name'] = "Kewpie";

console.log(cat2);  //Because of object, new variable is referencing original variable (exact same)
console.log(cat1);


// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

moreSports = [...teamSports, "Tennis"];
cat2 = { ...cat1, name: "Bumba" };

console.log(moreSports);
console.log(teamSports)
console.log(cat2);
console.log(cat1)
