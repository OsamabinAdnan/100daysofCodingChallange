"use strict";
// This function greets a user by name, 
// or greets an anonymous user if no name is provided
function greets(username = "Anonymous user") {
    // Says hello to the given name or to an anonymous user
    console.log(`Hello, ${username}! How are you?`);
}
// Trying the function with a name and without
greets();
greets("Osama");
// We see how our function can say hello to 
// someone by name, or just say hello if we don't know the name.
