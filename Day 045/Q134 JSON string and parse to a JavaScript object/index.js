"use strict";
// Defines a JSON string
let jsonString = `{
    "name":"Osama",
    "age" : 35,
    "city":"Karachi",
    "country":"Pakistan"
}`;
// Parses the JSON string back into a JavaScript object
const jsobject = JSON.parse(jsonString);
console.log(jsobject);
// This snippet shows how to take a JSON string and
// convert it back into a JavaScript object.
