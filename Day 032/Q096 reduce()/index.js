"use strict";
// This function calculates the sum of all numbers in an array
function sumOfAllNumbers(num) {
    return num.reduce((accumulator, current) => accumulator + current, 0);
}
//The reduce function effectively condenses an array into a single value by applying a callback function to each element. 
//In your calculateSum function, it accumulates the sum of all numbers in the array, starting with an initial value of 0
// Example: Calculating the sum of an array of numbers
const sumofNumbers = [19, 25, 37, 41, 56];
console.log(sumOfAllNumbers(sumofNumbers));
// It adds up all the numbers in the array,
// resulting in a single sum value.
