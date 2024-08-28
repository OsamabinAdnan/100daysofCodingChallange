"use strict";
// Initializes a counter
let count = 0;
let serial = 1;
// This while loop runs until count is 5
while (count < 5 && serial <= 5) {
    console.log(`(${serial}) Hello World!`);
    serial++, count++;
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.
