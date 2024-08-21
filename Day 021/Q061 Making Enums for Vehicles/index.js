"use strict";
// Making a list (enum) for different types of vehicles
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["truck"] = 1] = "truck";
    vehicles[vehicles["motorcycle"] = 2] = "motorcycle";
})(vehicles || (vehicles = {}));
// Showing one type of vehicle from the list
console.log(vehicles.car);
// It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
