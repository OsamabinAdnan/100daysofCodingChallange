"use strict";
// This function iterates through a string and logs each character 
// until it finds a vowel
function findingvowel(str) {
    let vowel = ("aeiouAEIOU");
    for (let char of str) {
        if (vowel.includes(char)) {
            console.log(`First vowel found ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered   
    }
}
findingvowel("dsfsdgdaeghrtbjidfdsa");
// Demonstrates iterating through a string and stopping at
// the first vowel.
