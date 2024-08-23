"use strict";
function iteration(car) {
    return car;
}
console.log(iteration({ make: "toyota", model: "corolla", year: 2020, color: "black" }));
//OR
// This function shows every detail about an object
function logobjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}
// Using the function with a car object
logobjectProperties({
    make: "toyota",
    model: "cameray",
    year: 2020,
    color: "black"
});
// It tells us each piece of information stored about the car.
