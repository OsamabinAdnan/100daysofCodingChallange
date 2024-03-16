//with generic names
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});


//With real names

let real_Currentusers: string [] =["ali", "Ahmed","Akbar", "Asghar","bilal","osama"];
let real_Newusers:string[] = ["Ali", "Arham","Osman","Akbar","Hamdan","Sufiyan", "Osama"];

real_Newusers.forEach(real_New_users => {
    if(real_Currentusers.some(real_Current_users => real_Current_users.toLowerCase()===real_New_users.toLowerCase())){
        console.log(`${real_New_users} will need to enter new username`);
    } else {
        console.log(`${real_New_users} is avaialble`);
    }
});
