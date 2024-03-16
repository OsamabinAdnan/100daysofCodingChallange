//if numbers are in series
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});


//if numbers are not in series
let numbers_:number[] =[9,6,5,7,8,1,4,3,2,10]
numbers_.forEach(number$ => {
    let suffix_ = "th";
    if (number$===1 ) {
        suffix_ ="st";
    } else if (number$ === 2){
        suffix_="nd";
    } else if (number$ === 3) {
        suffix_ = "rd";
    }
console.log(`${number$}${suffix_}`)
});