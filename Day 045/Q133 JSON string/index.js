"use strict";
// Defines a JavaScript object
let person = {
    name: "Osama bin Adnan",
    age: 35,
    city: "Karachi"
};
// Converts the object into a JSON string
const JSONstring = JSON.stringify(person);
// Demonstrates converting an object to a JSON string,
//  making it easy to store or transmit.
console.log(JSONstring);
