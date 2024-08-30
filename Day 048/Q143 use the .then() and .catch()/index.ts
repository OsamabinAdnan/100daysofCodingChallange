let isDinner = true
function dinner (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isDinner){
                resolve ("Dinner is served")
            } else {
                reject("Dinner is not served")
            }
        }, 3000)
    })
}

dinner().then((resolve)=>{
    console.log(resolve)
}).catch((error)=>{
    console.log(error)
})

//OR

const myPromise = new Promise <string> ((resolve, reject)=>{
    const success = Math.random() > 0.5;
    if (success) {
        resolve ("Success !")
    } else {
        reject ("Failure !")
    }
})
.then((resolve)=>{
    console.log(resolve);    
}).catch ((reject)=>{
    console.log(reject);    
})