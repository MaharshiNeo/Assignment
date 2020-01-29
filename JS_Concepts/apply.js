function disp2(l1, l2, l3){
    console.log(`Hello, My name is ${this.name} and i know ${l1} ${l2} and ${l3}`);
    
}

const l = ["Javascript", "Java", "Python"]
user = {
    name : "Maharshi"
}

disp2.apply(user, l)