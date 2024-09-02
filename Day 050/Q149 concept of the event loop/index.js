"use strict";
console.log("Start");
// This gets queued to be executed by the event loop
setTimeout(() => {
    console.log("Callback Executed");
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" 
// is logged after "End" due to the event loop.
