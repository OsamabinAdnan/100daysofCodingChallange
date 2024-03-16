"use strict";
//Empty array
let username = [];
if (username.length === 0) {
    console.log("We need to find some users!"); //this will be the answer
}
else {
    console.log(`Hello! ${username} how are you today`);
}
//Array has some data
let user$name = ["Ali"];
if (user$name.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log(`Hello! ${user$name} how are you today?`); //this will be the answer
}
//Print each name of array seperate
let usernames = ["Ali", "Ahmed", "Ammad"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else
    (usernames.forEach(user_names => {
        console.log(`Hello! ${user_names} how are you today?`); //this will be the answer
    }));
