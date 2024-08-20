let price1:number[] = [120000 , 75000 , 55000]
let price2:number[] = [130000 , 85000 , 40000]

let price = [...price1,...price2].sort((a,b)=>a-b)
console.log(price);

//The sort method is used to order the array elements. 
//The callback (a, b) => a - b is a comparison function that determines the order. 
//It works by subtracting b from a, resulting in a sorted array in ascending order.