let friendNames:string[] = ["Abdullah", "Abdul Rehman", "Ali", "Ahmed", "Arham"]

let message :string = ("Would you like to learn some Typescript?")

friendNames.forEach(name => {
    console.log(`Hello ${name}, ${message}`);    
})

//OR

for (let i=0; i < friendNames.length; i++){
    console.log("Hello" + " " + friendNames[i] + ", " + message);
    
}