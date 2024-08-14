let ordinalNumber:number[] = [1,2,3,4,5,6,7,8,9]

ordinalNumber.forEach(number => {
    if (number === 1) {
        console.log(number + "st");        
    }
    else if (number === 2){
        console.log(number + "nd");        
    } else if (number === 3){
        console.log(number + "rd");        
    } else if (number >=4 && number <=9){
        console.log(number + "th");        
    } else {
        console.log(`Please enter a valid number`);        
    }
})
