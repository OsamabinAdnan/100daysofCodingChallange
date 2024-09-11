"use strict";
/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/
//Function to calculate the area of the rectangle
function calculateTheArea(length, width) {
    return length * width;
}
let area = calculateTheArea(5.6, 4.5);
console.log(`The area of the rectangle is ${area}`);
/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/
// Optional Parameters:
function greeting(name, age) {
    if (age !== undefined) {
        console.log(`Hi, my name is ${name} and I am ${age} years old`);
    }
    else {
        console.log(`Hi, my name is ${name}`);
    }
}
greeting("Osama", 35);
greeting("Arham");
// Default Parameters:
function greetDefault(name, age = 25) {
    console.log(`Hi, my name is ${name} and I am ${age} years old`);
}
greetDefault("Ali");
greetDefault("Ahmed", 30);
/***************************
 * FUNCTION REST PARAMETER *
 ***************************/
// Function with a rest parameter and type annotations
function addAll(...num) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
//`+true`** in JavaScript is a unary plus operator (**`+`**) applied to the boolean **`true`**, 
//resulting in the numeric value **`1`**.
/******************
 * ARROW FUNCTION *
 ******************/
let addwithArrow = (num1, num2) => num1 + num2;
console.log(addwithArrow(6, 6));
/**********************
 * ANONYMOUS FUNCTION *
 **********************/
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
/****************
 * VOID & NEVER *
 ****************/
// void
function functionVoid(name) {
    console.log(`Hello! ${name}`);
}
functionVoid("Ali");
function noReturnValue() {
    // This function doesn't return a value (implicitly returns undefined).
}
// never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
