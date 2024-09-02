"use strict";
function sum(a, b, cb) {
    let result = a + b;
    cb(result);
}
function callback(result) {
    console.log(result);
}
sum(5, 5, callback);
//OR
// This function accepts a callback function and 
// invokes it with given arguments
function executecallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add = (a, b) => {
    console.log(a + b);
};
executecallback(add, 5, 3);
// Demonstrates invoking a callback function with arguments to perform an addition.
