"use strict";
function userProfile(name, age) {
    return `Name: ${name}, Age: ${age}`;
}
let user = (userProfile("John", 45));
console.log(user);
//OR
// This profile sets itself up and can share info about the user
let UserProfile = (function profile() {
    // The user's details are kept inside
    let name = "Osama";
    let age = 35;
    // This part shares the user's details
    return {
        displayinfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
// Asking the profile to tell us about the user
UserProfile.displayinfo();
// We made a self-setup profile that can talk about the user.
