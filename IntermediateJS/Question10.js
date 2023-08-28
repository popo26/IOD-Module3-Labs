/*
10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

// a) Print the total number of minutes that have passed so far today
const hoursTillNowTodayInMin = today.getHours() * 60;
const totalMinTillNowToday = hoursTillNowTodayInMin + today.getMinutes();
console.log(totalMinTillNowToday + ' min have passed so far today')

// b) Print the total number of seconds that have passed so far today
const totalSecTillNowToday = totalMinTillNowToday * 60;
console.log(totalSecTillNowToday + ' sec have passed so far today')


// c) Calculate and print your age as: 'I am x years, y months and z days old'
// const bday = new Date(1979, 10, 14).toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo' });
const bday = new Date("1979-11-14")
// console.log(bday)
// console.log(bday.getFullYear());
// console.log(typeof bday.getFullYear())
// console.log(today.getFullYear())
// console.log(today.getFullYear() - bday.getFullYear())
// console.log(today.getMonth() - bday.getMonth())
// console.log(+today)
// console.log(today.getTime() - bday.getTime())

const diff = today.getTime() - bday.getTime();
const sec = Math.floor(diff / 1000);
const min = Math.floor(sec / 60)
const hours = Math.floor(min / 60)
const days = Math.floor(hours / 24)
const months = Math.floor(days / 30)
const years = Math.floor(days / 365)
// console.log(
//     `diff in total SEC: ${sec} sec, 
//     in total MIN: ${min} min, 
//     in total HOURS: ${hours} hours, 
//     in total DAYS: ${days} days, 
//     in total MONTHS: ${months} month, 
//     in total YEARS: ${years} years`
//     );

const actualDays = years * 365;
// console.log("Actual days I lived " + years * 365 + " days.")
const remainderDaysAfterTotalDays = days - actualDays;
// console.log("Remainder of days after subtracting actual lived days from total diff days " + remainderDaysAfterTotalDays + " days.")
const actualMonthLived = Math.floor(remainderDaysAfterTotalDays / 30);
// console.log(actualMonthLived)
const remainderDaysAfterMonthLived = remainderDaysAfterTotalDays - actualMonthLived * 30;
// console.log("Remainder days after months and years calculated from total diff days" + remainderDaysAfterMonthLived + " days.")
// console.log(actualMonthLived * 30)

console.log(`I am ${years} years, ${actualMonthLived} months and ${remainderDaysAfterMonthLived} days old.`)


// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.floor((d1.getTime() - d2.getTime()) / 1000 / 60 / 60 / 24);
}

console.log(daysInBetween('2023-08-23', '2022-08-22'));