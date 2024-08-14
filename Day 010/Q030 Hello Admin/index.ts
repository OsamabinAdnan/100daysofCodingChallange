let userNames:string[] = ["Admin","Osama", "Ahmed", "Ali", "Hamza", "Umer"]

userNames.forEach(user => {
    if (user === "Admin"){
        console.log(`Hello ${user}! Would you like to see a status report`);        
    }
    else {
        console.log(`Hello ${user}! Thank you for logging in again`);        
    }
})
