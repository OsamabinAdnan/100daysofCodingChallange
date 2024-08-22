"use strict";
let myName = "Osama bin Adnan";
myName = "Mohammad Arham"; // Works fine because `let` allows reassignment
console.log(myName);
// Trying to reassign a `const`-declared variable
const my_Name = "Osama bin Adnan";
try {
    my_Name = "Arham"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
// This example illustrates that `const` prevents changing the variable once it's set.
