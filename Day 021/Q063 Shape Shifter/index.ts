// Creating a custom type for shapes that could be circles or rectangles
type Shape = {
    type: "circle" | "rectangle";
    radius?: number; // Only for circles
    diameter?:number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
}

// Describing a circle using our Shape type
let Circle:Shape = {
    type: "circle",
    radius: 10,
    diameter:20
}
// Describing a rectangle using our Shape type
let Rectangle:Shape = {
    type:"rectangle",
    width:20,
    height:15
}
// Showing what we described
console.log(Circle);
console.log(Rectangle);
// We made a flexible program that can describe different shapes in detail.