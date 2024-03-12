var guests = ["Hamdan", "Sufiyan", "Osman", "Arham"];
var notcoming = guests[0];
console.log(notcoming, "is not coming");
guests.splice(0, 1, "Huzaifa");
guests.forEach(function (newguest) { return console.log("\"Hello ".concat(newguest, ", you are invited to dinner with me tomorrow at 8 PM\"")); });
