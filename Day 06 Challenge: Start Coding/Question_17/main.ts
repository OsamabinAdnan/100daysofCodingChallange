//Old Guests list
let oldGuests:string[] = ["Hamdan", "Sufiyan", "Usman", "Arham"];
console.log("Good News! I found a bigger dinner table");
//Adding more guest
oldGuests.unshift("Talha");
oldGuests.push("Huzaifa");
oldGuests.splice(oldGuests.length/2,0,"Osama");
//Print statement
oldGuests.forEach(newGuest => {
    console.log(`"Hello ${newGuest}, you are invited to dinner with me tommorow at 8 PM"`)
    
});
//Inform that only 2 guests invited for dinner
console.log("Unfortunately! our new table wont arrive in time, so I can invite only two guests for dinner with me");
//using while loop to remove the guests name from the array until only 2 guest remaing
while(oldGuests.length > 2) {
    let removedguest = oldGuests.pop();
    console.log(`Sorry ${removedguest}!, I can't invite you to dinner.`);
}
//invitation for last 2 guests
oldGuests.forEach(last2guests => {
    console.log(`Luckyly ${last2guests}!, you are still invited for dinner with me tommorrow at 8 PM`);
});
//remove last 2 guest and print empty list, we can use pop() (2 times) function as well instead of splice
oldGuests.splice(0,oldGuests.length);
console.log("Empty List", oldGuests);

