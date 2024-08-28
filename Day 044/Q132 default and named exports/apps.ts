// Importing a default export:
import person from "./index";

// Importing named exports:
import { personEducation, personhobbies } from "./index";

// This code illustrates the syntax and usage differences 
// between default and named exports.

console.log(person("Osama", 35));
console.log(personhobbies("coding", "history", "web development"));
console.log(personEducation("BS textile", "MBA Marketing"));


