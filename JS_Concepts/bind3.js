function display(){
    console.log(this.name);
    
}

let user = {
    name : "Maharshi",
}

let disp = display.bind(user)
setTimeout(function(){ disp()},1000)

let user2 = {
    name : "Meet",    
}

disp.call(user2)