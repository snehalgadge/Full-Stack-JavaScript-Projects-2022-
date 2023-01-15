// 11. Use the Date object to do the following activities
const now = new Date();

// - What is the year today?
console.log("This year is " , now.getFullYear());

// - What is the month today as a number?
console.log("This Month is " , now.getMonth());

// - What is the date today?
console.log("Today's Date is ",now.getDate());

// - What is the day today as a number?
console.log("Todays's Day " ,now.getDay());

// - What is the hours now?
console.log("This hour is ", now.getHours());

// - What is the minutes now?
console.log("Minutes are" ,now.getMinutes());

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

var elapsedDate = new Date(1989, 10, 15);
var elapsedT = now - elapsedDate; 

console.log(elapsedT);