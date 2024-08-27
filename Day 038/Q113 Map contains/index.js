"use strict";
const countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
countries.set("Canada", "Ottawa");
console.log(countries);
// This function checks for "Canada" in the Map and logs its capital
function checkcountries(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is  ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the map.");
    }
}
// Assuming countries Map from Question 112
checkcountries(countries);
// Checks if Canada is in our Map and logs the capital if it exists.
