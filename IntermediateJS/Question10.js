/*
10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

// a) Print the total number of minutes that have passed so far today
const hoursTillNowTodayInMin = today.getHours() * 60;
const totalMinTillNowToday = hoursTillNowTodayInMin + today.getMinutes();
console.log("\r\n----------the total number of minutes that have passed so far today----------");

console.log(totalMinTillNowToday + ' min have passed so far today')

// b) Print the total number of seconds that have passed so far today
const totalSecTillNowToday = totalMinTillNowToday * 60;

console.log("\r\n----------Calculate and print your agePrint the total number of seconds that have passed so far today----------");
console.log(totalSecTillNowToday + ' sec have passed so far today')


// c) Calculate and print your age as: 'I am x years, y months and z days old'

const bday = new Date("1979-11-14")
//Time in milliseconds from my bday till now 
const diff = today.getTime() - bday.getTime();
// Total time (diff above) in each unit
const sec = Math.floor(diff / 1000); //1381892488 sec
const min = Math.floor(sec / 60) //23031541 min
const hours = Math.floor(min / 60) //383859 hours
const days = Math.floor(hours / 24) //15994 days
const months = Math.floor(days / 30) //533 month
const years = Math.floor(days / 365) //43 years

const actualDaysOfYears = years * 365; //15695 days
const remainderDaysAfterSubtractingYears = days - actualDaysOfYears; //299 days
const remainderDaysInMonth = Math.floor(remainderDaysAfterSubtractingYears / 30); //9 months
const remainderDaysAfterSubtractingMonths = remainderDaysAfterSubtractingYears - remainderDaysInMonth * 30; //29 days

console.log("\r\n----------------Calculate and print your age----------------");
console.log(`I am ${years} years, ${remainderDaysInMonth} months and ${remainderDaysAfterSubtractingMonths} days old.`)


// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.floor((d1.getTime() - d2.getTime()) / 1000 / 60 / 60 / 24);
}

console.log("\r\n----------------function daysInBetween(date1, date2)----------------")
console.log(daysInBetween('2023-08-23', '2022-08-22')); //366 days
console.log(daysInBetween('2023-08-23', '2023-08-22')); //1 day