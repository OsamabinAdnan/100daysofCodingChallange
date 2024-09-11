"use strict";
/*******************
 * INTERFACE INTRO *
 *******************/
let osamabinadnan = {
    name: "Osama bin Adnan",
    age: 35
};
// Create an object that adheres to the 'Person1' interface
let person = {
    name: "Osama",
    age: 35,
    greet(message) {
        console.log(`${this.name} says ${message}`);
    }
};
person.greet(`Hello! How are you?`);
// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings = {
    theme: true,
    sideBar: false,
    font: "Time Now",
    external: true
};
/********************
 * HTML IMAGE ELEMENT *
 ********************/
const imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log(`Image Dimension: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
}
else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
class Labrador {
    constructor() {
        this.type = "dog";
    }
    bark() {
        console.log("Woof!");
    }
}
const labrador = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
const myCar = {
    brand: "Toyota",
    model: "Camry",
};
//Type Alias: Does not support declaration merging. 
//If you declare multiple type aliases with the same name, you'll get an error.
