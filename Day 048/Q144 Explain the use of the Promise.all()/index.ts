// Example using Promise.all to wait for multiple
// promises to resolve

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise ((resolve, reject)=>{
    setTimeout(resolve, 1000, 'foo')
})
//const promise4 = Promise.reject(49) ==> promise all accept only resolve promise if any promise reject, promise all only run reject promise via catch

Promise.all ([promise1, promise2, promise3]).then ((resolve)=>{
    console.log(resolve);
}).catch ((reject)=>{
    console.log(`An error occured`,reject);    
})
// This demonstrates how Promise.all waits for all
// promises to resolve and then logs the array of their results.