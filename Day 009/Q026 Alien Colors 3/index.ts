let alien_color:string = "Pink"

//Version that runs the Green color block
alien_color = "Green"
if (alien_color === "Green"){
    console.log("Green color: You just earned 5 points")
} else if (alien_color === "Yellow"){
    console.log("You just earned 10 points")
} else if (alien_color === "Red"){
    console.log("You just earned 15 points")
}
//Version that runs the Yellow color block
alien_color = "Yellow"
if (alien_color === "Green"){
    console.log("You just earned 5 points")
} else if (alien_color === "Yellow"){
    console.log("Yellow color: You just earned 10 points")
} else if (alien_color === "Red"){
    console.log("You just earned 15 points")
}
//Version that runs the Red color block
alien_color = "Red"
if (alien_color === "Green"){
    console.log("You just earned 5 points")
} else if (alien_color === "Yellow"){
    console.log("You just earned 10 points")
} else if (alien_color === "Red"){
    console.log("Red Color: You just earned 15 points")
}
//Version that runs else block
alien_color = "Pink"
if (alien_color === "Green"){
    console.log("You just earned 5 points")
} else if (alien_color === "Yellow"){
    console.log("You just earned 10 points")
} else if (alien_color === "Red"){
    console.log("You just earned 15 points")
} else {
    console.log("Other color than Green, Yellow and Red: You earned 0 points")
}