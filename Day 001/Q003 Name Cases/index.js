"use strict";
let personName = "Osama bin adnan";
//For lowercase
let lowerCase = personName.toLowerCase();
console.log(lowerCase);
//For Uppercase
let uppercase = personName.toUpperCase();
console.log(uppercase);
//For title case
let titleCase = (personName.replace(/\b\w/g, (char) => char.toUpperCase()));
console.log(titleCase);
