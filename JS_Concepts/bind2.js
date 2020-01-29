const user1 = {
    name : "Maharshi"
}


const user2 = {
    name : "Meet"
}

function display(){
    console.log(`My name is ${this.name}`);
    
}

let fun = display.bind(user1)
fun()


