"use strict";
let fruits = ["Apple", "Mango", "Orange", "Peach"];
console.log();
// Equality with strings
console.log("Testing equality with string");
console.log("apple" == "apple"); //true
// console.log("apple" == "Apple"); //false
console.log();
// Using the lower case function
let phal = "Apple";
console.log("Testing with Lower Case");
// console.log(phal.toLowerCase === phal);
console.log();
// Numerical tests
console.log("Numeric Test");
console.log(10 > 5);
console.log(10 < 5);
console.log();
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
console.log();
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // False
console.log(fruits.includes("Apple")); // True
console.log();
// Test whether an item is not in a array
console.log("Is 'cheey' not in fruits?");
console.log(!fruits.includes("Cherry")); // True
