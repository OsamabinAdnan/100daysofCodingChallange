let guests:string[] = ["Ali", "Ahmed", "Abdullah"]
console.log(`Unfortunately ${guests[2]} will not join us for Dinner`);

guests.pop()
guests.push("Hamza")
console.log(`\nOur new guests list is:`);
console.log(guests);
guests.forEach(guest => {
    console.log(`Hello ${guest}! you are invited to dinner with me`)
});


