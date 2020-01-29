let p = new Promise((resolve, reject) => {
    a = 1 + 2
    if(a == 2){
        resolve("Success")
    }
    else{
        reject("Failed")
    }
})

p.then((message) => {
    console.log(message);
    
}).catch((message) => {
    console.log(message);
    
})