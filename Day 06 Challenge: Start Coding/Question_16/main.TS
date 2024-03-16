//Old Guests list
let oldGuests:string[] = ["Hamdan", "Sufiyan", "Usman", "Arham"];

console.log("Good News! I found a bigger dinner table");

//Adding more guest
oldGuests.unshift("Talha");
oldGuests.push("Huzaifa)");
oldGuests.splice(oldGuests.length/2,0,"Osama");

//Print statement
oldGuests.forEach(newGuest => {
    console.log(`"Hello ${newGuest}, you are invited to dinner with me tommorow at 8 PM"`)
    
});