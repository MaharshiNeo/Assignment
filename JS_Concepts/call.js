function disp(){
    console.log(`Hello, my name is ${this.name}`);
}

var user = {
    name: "Maharshi",
}

disp.call(user)
console.log();

var user1 = {
    name: "Maharshi",
    greet : function(){
        console.log(`Hello, My name is ${this.name}`);
    }
}
var user2 = {
    name: "Limbachiya",
}
user1.greet.call(user2,"Maharshi")
console.log();


function disp2(l1, l2, l3){
    console.log(`Hello, My name is ${this.name} and i know ${l1} ${l2} and ${l3}`);
    
}

const l = ["Javascript", "Java", "Python"]
user3 = {
    name : "Maharshi"
}

disp2.call(user3, l[0], l[1], l[2])