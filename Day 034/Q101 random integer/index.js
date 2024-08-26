"use strict";
// Generates a random integer between 1 and 10
function randomInteger() {
    let integer = (Math.floor(Math.random() * 10) + 1);
    return integer;
}
// Outputs a random integer between 1 and 10
console.log(randomInteger());
// This function combines Math.random() with Math.floor() to create a random integer within our range.
