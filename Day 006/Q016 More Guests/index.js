"use strict";
let guests = ["Sana", "Saba", "Sara", "Sadia"];
console.log(`\nGood News! we have found bigger dinner table so there is room for more guests`);
//adding at the end of the array
guests.push("Ali");
console.log("Add at the end of array", guests);
//adding at the start of the array
guests.unshift("Ahmed");
console.log("Add at the start of array", guests);
//adding at the middile of the array
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Hamza");
console.log("Add at the middle of array", guests);
guests.forEach(guest => {
    console.log(`Hello ${guest}! would you like to join me for dinner?`);
});
