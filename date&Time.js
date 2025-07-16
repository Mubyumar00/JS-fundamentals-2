//  date &Time.js
// This file contains code to demonstrate the use of the Date object in JavaScript.
const date = new Date();
console.log(date);


const minutes = date.getMinutes();
const hours = date.getHours();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const dayOfWeek = date.getDay();
const timeZone = date.getTimezoneOffset();


console.log(dayOfWeek);
console.log(timeZone);
console.log(minutes);
console.log(hours);
console.log(day);
console.log(month);
console.log(year);