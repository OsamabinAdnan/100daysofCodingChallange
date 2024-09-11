/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/

let fruits: string[] = ["apple", "banana", "mango"]

for (let i=0; i<fruits.length; i++){
    console.log(`Fruits: ${fruits[i].toUpperCase()}`);
    
}

/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/

let arrayOne:string[] = ["A", "B", "C", "D"]
let arrayTwo:number[] = [1, 2, 3, 4]

let arrayThree: (string|number)[] = ["A", "B", "C", "D", 1, 2, 3, 4]
console.log(arrayThree);
