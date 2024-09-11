enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
console.log(Days[2]);

let today:Days = Days.Monday;
console.log(today);

console.log(`Today is ${Days[today]}`);
