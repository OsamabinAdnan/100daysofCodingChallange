// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date()

if (currentTime.getHours()<12){ // It's morning if before 12 PM
    console.log("Good Morning")
} else {
    console.log("It is not morning anymore") //It's not morning if after 12 PM
}
// This simple check helps us greet users appropriately 
// based on the time of day.
