
// Default export
export default function person (name:string, age:number):string{
    return `My name is ${name} and my age is ${age}`
}
// Named export
export function personhobbies (...string:string[]){
    return `My hobbies are ${string.join(" / ")}`
}
// Named export
export function personEducation (...edu:string[]){
    return `My education is ${edu.join(" | ")}`
}


