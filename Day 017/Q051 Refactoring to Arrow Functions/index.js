"use strict";
//Simple function
function area(width, length) {
    return width * length;
}
console.log(area(6, 5));
//refactoring to arrow function
let areaOfRectangle = (width, length) => width * length;
console.log(areaOfRectangle(5, 9));
