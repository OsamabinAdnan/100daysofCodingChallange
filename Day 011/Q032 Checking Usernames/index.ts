let current_users:string[] = ["Osama", "Ali", "Ahmed", "Hamza", "Umer"]

let new_users:string[] = ["Sara", "Sana", "Saba", "Osama", "Hamza"]

new_users.forEach (newUser => {
   if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())){
    console.log(`${newUser} will need to enter a new username`);
   } else {
    console.log(`The ${newUser} is available`);
    
   }
   
})
