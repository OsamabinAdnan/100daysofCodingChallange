var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Original Order
var countriesToVisit = ["Turkey", "Saudia Arabia", "Palestine", "Switzerland"];
console.log("Original Order:", countriesToVisit);
//print countries name in alphabetical order
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Still in original order
console.log("Still in original order", countriesToVisit);
//print countries name in reverse alphabetical order
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//Still in original order
console.log("Still in original order", countriesToVisit);
//Reverse the order of list. Print the array to show that its order has changed.
console.log("Original Order Reverse:", countriesToVisit.reverse());
//Reverse the order of the list again so it will come in it original order
console.log("Again Reverse to Original Order:", countriesToVisit.reverse());
//Sort array in alphabatical order
console.log("Original Alphabetical Order", countriesToVisit.sort());
//Sort array in reverse alphabatical order
console.log("Reverse Alphabetical Order", countriesToVisit.reverse());
