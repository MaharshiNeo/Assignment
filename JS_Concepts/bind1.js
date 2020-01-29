function disp(l){
    console.log(`Hello, My name is ${this.name} and i know ${l[0]} ${l[1]} and ${l[2]}`);
    
}

user = {
    name : "Maharshi"
}



const l = ["Javascript", "Java", "Python"]
var bound = disp.bind(user,l)
console.log(bound);
bound(l[0], l[1], l[2])
