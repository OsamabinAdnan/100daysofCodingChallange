"use strict";
// Defines an array with some words
let oldArray = ["Hello", "World", "TypeScript", "JavaScript", "Arrays"];
// Uses .map() to create a new array with the length of each word
let lengths = oldArray.map((word) => word.length);
// MAP: Calls a defined callback function on each element of an array, and returns an array that contains the results
console.log(lengths);
// Each number in the new array represents the 
// length of the corresponding word in the original array.
