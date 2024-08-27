let studentScore = function (score:number):string{
    if (score >=90){
        return "A grade, Excellent!"
    } else if (score >=80){
        return "B grade, Very Good"
    } else if (score >=70){
        return "C grade, Nice"
    } else if (score >=60){
        return "D grade, Need to improve" 
    } else {
        return "F Very Sorry, you are fail"
    }
}

console.log(studentScore(91));
console.log(studentScore(83));
console.log(studentScore(76));
console.log(studentScore(67));
console.log(studentScore(59));



