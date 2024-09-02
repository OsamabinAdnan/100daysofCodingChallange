"use strict";
//Synchronous function
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 100; i++) { }
console.log("After synchronous operation");
//Asunchronous function
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asychronous operation completed");
}, 2000);
console.log("After asynchrous operation");
// Demonstrates how the rest of the code continues 
// to execute without waiting for the asynchronous operation.
