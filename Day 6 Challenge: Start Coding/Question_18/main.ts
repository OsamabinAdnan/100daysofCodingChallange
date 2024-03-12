//Original Order
let countriesToVisit: string[] = ["Turkey", "Saudia Arabia","Palestine","Switzerland"];
console.log("Original Order:", countriesToVisit);

//print countries name in alphabetical order
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//Still in original order
console.log("Still in original order", countriesToVisit);

//print countries name in reverse alphabetical order
console.log("Reverse order:",[...countriesToVisit].reverse());

//Still in original order
console.log("Still in original order", countriesToVisit);

//Reverse the order of list. Print the array to show that its order has changed.
console.log("Original Order Reverse:",countriesToVisit.reverse());

//Reverse the order of the list again so it will come in it original order
console.log("Again Reverse to Original Order:",countriesToVisit.reverse());

//Sort array in alphabatical order
console.log("Original Alphabetical Order",countriesToVisit.sort());

//Sort array in reverse alphabatical order
console.log("Reverse Alphabetical Order",countriesToVisit.reverse());
