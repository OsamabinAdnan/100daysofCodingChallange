let guests = ["Hamdan", "Sufiyan", "Osman", "Arham"];
let notcoming = guests[0];
console.log(notcoming, `is not coming`);
guests.splice (0,1,"Huzaifa");
guests.forEach(newguest => console.log(`"Hello ${newguest}, you are invited to dinner with me tomorrow at 8 PM"`));

