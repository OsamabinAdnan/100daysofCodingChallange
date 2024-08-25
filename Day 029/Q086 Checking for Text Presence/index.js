"use strict";
// This function checks if a sentence has "JavaScript" in it
function textPresence(str) {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
}
console.log(textPresence(`I love JavaScript`));
// Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.
