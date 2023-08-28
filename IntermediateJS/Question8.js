/*
8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.
*/

const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F 
const phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values 
phoneBookDEF.set("Daniel", "0219856421")
phoneBookDEF.set("Eric", "0122568456")
phoneBookDEF.set("Franchesca", "0225684572")

// c) Update the phone number for Caroline 
phoneBookABC.set('Caroline', '0111111111')

// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map 
function printPhoneBook(contacts) {
    for (let contact of contacts) {
        console.log(contact);
    }
};
console.log("-------------------PhonebookABC----------------------------")
printPhoneBook(phoneBookABC);
console.log("-------------------PhonebookDEF----------------------------")
printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map 
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log("-------------------Combined Phonebook----------------------------")
console.log(phoneBook);

// f) Print out the full list of names in the combined phone book
for (let contact of phoneBook.keys()) {
    console.log(contact);
};