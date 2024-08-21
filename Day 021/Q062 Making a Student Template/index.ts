// Creating a blueprint (interface) for student information
interface Student {
    name:string,
    age:number,
    classes:string[]
}
// Filling in the blueprint with an example student
let studentInfo:Student = {
    name: "Osama bin Adnan",
    age:35,
    classes:["Typescript", "Digital Marketing", "HTML", "CSS"]
}
// Showing the student's information
console.log(studentInfo);
console.log(studentInfo.classes);
// We're using the blueprint to make sure our student has a name, age, and list of courses.