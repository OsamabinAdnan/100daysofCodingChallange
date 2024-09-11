"use strict";
/***************
 * UNION TYPES *
 ***************/
let myVar;
myVar = "Hello";
console.log(myVar);
myVar = 42;
console.log(myVar);
/*****************
 * LITERAL TYPES *
 *****************/
let direction;
function selectColor(color) {
    console.log(color);
}
selectColor("red");
// selectColor("yellow") ==> //ERROR
/******************
 * NULLABLE TYPES *
 ******************/
let userName = "Hello";
let ageEx = null;
function greet(name) {
    if (name === null) {
        console.log(`Hello Guest!`);
    }
    else {
        console.log(`Hello ${name}!`);
    }
}
greet("Osama");
greet(null);
let myName = "Osama";
let myValue = "Osama";
myValue = 35;
let osama = {
    name: "Osama",
    age: "35 years",
    email: "osama@gmail.com"
};
let arham = {
    name: "Arham",
    age: 3.5
};
console.log(osama);
console.log(arham);
let person = {
    name: "Osama bin Adnan",
    age: 35,
    email: "osama@gmail.com",
    address: "North Karachi",
    phoneNum: +923001234567
};
console.log(person);
