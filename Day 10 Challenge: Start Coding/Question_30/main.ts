//Admin and other users

let usernames:string[] =["Admin", "User1", "User2", "User3", "User4"]
usernames.forEach(username => {
if (username === "Admin") {
console.log("Hello admin, How are you today? Would you like to see status report")
}
else {
    console.log (`Hello ${username} thank you for logging in again`) 
}
})

