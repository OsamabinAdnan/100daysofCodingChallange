"use strict";
// This function logs the season based on the month
function seasons(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            console.log("Summer");
            break;
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default:
            console.log("Invalid month");
    }
}
// Multiple cases share the same code block to represent each season.
seasons(6);
seasons(12);
seasons(3);
seasons(10);
seasons(13);
