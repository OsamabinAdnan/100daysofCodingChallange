let guests: string[] = ["Ahmed","Sana", "Saba","Hamza", "Sara", "Sadia", "Ali"];

console.log(`\nUnfortunately table wont arrive in time and I can invite only 2 peoples\n`);

while (guests.length > 2) {
    let removedGuest =guests.pop()
    console.log(`Sorry ${removedGuest}, you are not invited for dinner`);    
}
console.log(``);

guests.forEach(guest => {
    console.log(`Hello ${guest}! you are still invited for dinner`);
});
//Empty array
console.log(``);
guests.splice(0,guests.length)
console.log(guests);

