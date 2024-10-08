"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchData();
    console.log(data);
    // The 'await' keyword pauses the execution until the 
    // Promise settles, and then resumes with the resolved value.    
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
// This demonstrates how 'await' improves readability and 
// flow in asynchronous code.
