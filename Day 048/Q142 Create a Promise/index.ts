function helloword (){
    return new Promise ((resolve, reject)=> {
        setTimeout(()=>{
            resolve ("Hello World!")
        },2000)
    })
}
helloword().then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
});


//OR

const message = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve("Hello World!")
    },2000)
})

message.then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
})
