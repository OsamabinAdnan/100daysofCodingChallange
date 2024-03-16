"use strict";
//Code 1 of stage of life
let age = 35;
if (age < 18) {
    console.log("Teenager");
}
else if (age <= 30 && age >= 18) {
    console.log("Youth");
}
else if (age <= 45 && age > 30) {
    console.log("Middle Age");
}
else if (age <= 60 && age > 45) {
    console.log("Elder");
}
else if (age > 60) {
    console.log("Old");
}
// Code 2 of stages of life
age = 25;
if (age < 2) {
    console.log("The person is baby.");
}
else if (age < 4) {
    console.log("The person is toddler.");
}
else if (age < 13) {
    console.log("The person is kid.");
}
else if (age < 20) {
    console.log("The person is teenager.");
}
else if (age < 65) {
    console.log("The person is adult.");
}
else {
    console.log("The person is elder.");
}
