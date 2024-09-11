/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
 *********************************/

let personExOne : {
    name: string;
    age: number;
    jobTitle?:string
    address: {
        street: string;
        city: string;
        state: string;
    }
}
personExOne = {
    name: 'John Doe',
    age: 30,
    jobTitle:"Engineer",
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
}

// And there is yet another method

let personExTwo :{
    name:string,
    age:number,
    jobTitle?:string,
    address:{
        street:string,
        city:string,
        state:string,
    };
} = {
    name: 'Chris Martin',
    age: 42,
    jobTitle:"Engineer",
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'NY'
    }
}

console.log(personExOne);
console.log(personExTwo);
