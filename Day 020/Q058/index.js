"use strict";
// This program calculates the average of all scores given
function averageScore(...scores) {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, grade) => sum + grade, 0);
    return total / scores.length;
}
console.log(averageScore(80, 90, 100, 70));
