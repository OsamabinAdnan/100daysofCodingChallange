"use strict";
// This function finds the leftover of dividing two numbers
function reminder(num1, num2) {
    // Gives back the leftover of num1 divided by num2
    let reminder = num1 % num2;
    return reminder;
}
console.log(reminder(8, 3));
// This tells us the leftover, which is 2 here
