"use strict";
// A way to make a flexible list
function flexibleObject(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = flexibleObject("theme", "dark");
// Showing the user's choice
console.log(userPreference);
