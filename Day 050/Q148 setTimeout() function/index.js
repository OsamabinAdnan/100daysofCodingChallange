"use strict";
let matchWon = true;
function match() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (matchWon) {
                resolve("Match Won");
            }
            else {
                reject("Match Lost");
            }
        }, 2000);
    });
}
match().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});
//OR
// Uses setTimeout to log a message after a 2-second delay
setTimeout(() => {
    console.log("This message is shown after a 3-second delay.");
}, 3000);
// This showcases how to use setTimeout to delay actions in your code.
