/*******************
 * INTERFACE INTRO *
 *******************/

interface Person {
    name:string,
    age:number
}

let osamabinadnan:Person = {
    name:"Osama bin Adnan",
    age:35
}

/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/

// Define an interface 'Person' with a method 'greet'
interface Person1 {
    name:string
    age:number
    greet(message:string):void
}
// Create an object that adheres to the 'Person1' interface
let person:Person1 ={
    name:"Osama",
    age:35,
    greet(message:string):void {
        console.log(`${this.name} says ${message}`);        
    }
}
person.greet(`Hello! How are you?`)

/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/

// Homepage Interface Declaration
interface Setting {
    readonly theme:boolean
    font:string
}

// Articles Page Interface Reopening
interface Setting {
    sideBar:boolean
}

// Contact Page Interface Reopening
interface Setting {
    external:boolean
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface

let userSettings:Setting = {
    theme:true,
    sideBar: false,
    font:"Time Now",
    external:true
}

/********************
 * HTML IMAGE ELEMENT *
 ********************/

const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg"
imgElement.alt = "My Image"

if (imgElement.complete){
    console.log(`Image Dimension: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);        
    })
}

/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

// Declaration Syntax:

    //Interface
    interface PersonExInterface {
        name:string,
        age:number
    }
    //Type
    type PersonExType = {
        name:string,
        age:number
    }
// Extending And Implementing:

    //Interface
    interface AnimalExInterface {
        type: string;
      }
      
      interface Dog extends AnimalExInterface {
        bark(): void;
      }
      
      class Labrador implements Dog {
        type: string = "dog";
        bark() {
          console.log("Woof!");
        }
      }
    //Type
    type AnimalExType = {
        type: string;
      };
      
      type Monkey = AnimalExType & {
        bark(): void;
      };
      
      const labrador: Monkey = {
        type: "monkey",
        bark() {
          console.log("Woof!");
        },
      };

// Compatibility:

    //Interface
    interface Car {
        brand: string;
    }
    
    interface Car {
        model: string;
    }
    
    const myCar: Car = {
        brand: "Toyota",
        model: "Camry",
    };
    //Type Alias: Does not support declaration merging. 
    //If you declare multiple type aliases with the same name, you'll get an error.