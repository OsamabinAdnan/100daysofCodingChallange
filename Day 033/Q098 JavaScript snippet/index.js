"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    const date = new Date();
    // January 1st of next year
    const newYear = new Date(date.getFullYear() + 1, 0, 1);
    // Difference in milliseconds
    const difference = newYear.getTime() - date.getTime();
    // Converts to days
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + ` days until new year`);
// Tells us how many days there are until the next New Year's Day.
