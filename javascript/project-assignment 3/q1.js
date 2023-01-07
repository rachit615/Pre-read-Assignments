// JavaScript Program to calculate number of days between 2 Dates.
var date1 = new Date("01/01/2023");
var date2 = new Date("01/06/2023");

var diff_in_time = date2.getTime() - date1.getTime();
var diff_in_days = diff_in_time / (24 * 60 * 60 * 1000);

console.log("differnece between two dates is " + diff_in_days);
