interface Biodata {
    name:string,
    age:number,
    hobbies:string[],
    isStudent:boolean
}

let bioData:Biodata = {
    name:"Osama bin Adnan",
    age:35,
    hobbies:["coding", "playing", "learning"],
    isStudent:true
}

console.log(bioData);
console.log(`My name is ${bioData.name}, I am ${bioData.age} years old, my hobbies are ${bioData.hobbies} and yes that is ${bioData.isStudent} I am a student`);



