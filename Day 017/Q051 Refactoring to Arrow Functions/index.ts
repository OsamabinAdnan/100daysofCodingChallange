//Simple function

function area (width:number, length:number):number{
    return width*length
}
console.log(area(6,5));

//refactoring to arrow function

let areaOfRectangle = (width:number,length:number):number =>
    width*length

console.log(areaOfRectangle(5,9));

