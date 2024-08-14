"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "Green";
// Version that passes:
if (alien_color === "Green") {
    console.log("Yes, alien color is Green, you got 5 points");
}
// Version that fails (no output):
alien_color = "Yellow";
if (alien_color === "Green") {
    console.log("No, alien color is not green, You got no points");
}
