// This function categorizes a person's age group
function personAge (age:number):string {
    if (age >= 18) {
        return "Adult"
    } else if (age >= 13 && age < 18) {
        return "Teenager"
    } else {
        return "Child"
    }
} 

console.log(personAge(35));
console.log(personAge(16));
console.log(personAge(6));
// Based on the age provided, we log the corresponding age group.