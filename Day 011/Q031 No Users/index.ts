let userName : string [] = ["Osama", "Ali", "Ahmed", "Hamza", "Umer", "Admin", "Usman"]

if (userName.length === 0 ) {
    console.log(`We need to find some users`);    
} else {
    userName.forEach(user => {
        if (user === "Admin"){
            console.log(`Hello ${user}! Would you like to see the status report`);        
        }
        else {
            console.log(`Hello ${user}! Thank you for logging in again`);        
        }
    })    
}

userName = []
if (userName.length === 0 ) {
    console.log(`\nWe need to find some users`);    
} else {
    console.log(`Hello ${userName} How are you today?`);    
}








