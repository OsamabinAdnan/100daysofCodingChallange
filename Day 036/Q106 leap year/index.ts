// This function checks if a year is a leap year
function years (year:number):boolean{
    return (year % 4 === 0 && year % 100 !==0) || year % 400 === 0
 /*
In the Gregorian calendar, a year is considered a leap year if:
1) It is divisible by 4.
2) It is not divisible by 100,:
3) It is also divisible by 400.
 */
}

console.log(years(2024));
console.log(years(1900));
// By using comparison operators,
// we can easily determine if a year is a leap year or not.

