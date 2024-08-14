let alien_color:string = "Green"

if (alien_color == "Green") {
    console.log("Yes, Alien color is Green, you just earned 5 points!")
}
else{
    console.log("You just earned 10 points!");    
}

alien_color = "Yellow"
if (alien_color == "Green") {
    console.log("You just earned 5 points!")
}
else{
    console.log("No, Alien color is other than Green, you just earned 10 points!");    
}