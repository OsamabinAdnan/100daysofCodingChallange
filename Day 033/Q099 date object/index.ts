// Generates a Date object for the next occurrence of a specific birthday
function nextbirthday (month:number, day:number){
    const today = new Date();
    let year = today.getFullYear();
    // Months are 0-indexed
    const birthday = new Date(year,month -1, day)

    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1)
    }

    return birthday
}
// Replace with your birth month and day
const myBirthday = nextbirthday(1, 2)
// Shows the date of the next birthday.
console.log(`\nNext birthday on: ` , myBirthday.toLocaleString());


