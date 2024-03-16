"use strict";
// Equality with strings
let a = "Apple";
let b = "apple";
console.log("Testing equality with strings:");
console.log(a == a); //true
console.log(a == b); //false
//Testing Lowercase function
console.log("Testing Lowercase function:");
console.log(a.toLowerCase() == b); //true
console.log(a.toUpperCase() == b); //false
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); //true
console.log(!(10 > 5)); //false
console.log(1 < 2); //true
// Tests using "and" and "or" operators
console.log("Tests using 'and' and 'or' operators:");
console.log(true && true && true); //true
console.log(true && false && true); //false
console.log(true || false || false); //true
console.log(false || false || false); //false
//Test whether an item is in a array
let fruits = ["apple", "banana", "apricot", "peach", "kiwi"];
console.log("Is apple is in the fruit");
console.log(fruits.includes("apple")); //true
console.log("Is banana is in the fruit");
console.log(fruits.includes("banana")); //true
console.log("Is mango is in the fruit");
console.log(fruits.includes("mango")); //false
//Is Mango is not in the fruit
console.log("Is mango isn't in the fruit");
console.log(!fruits.includes("mango")); //true
console.log("Is peach isn't in the fruit");
console.log(!fruits.includes("peach")); //false
