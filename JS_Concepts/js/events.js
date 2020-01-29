var parent1 = document.querySelector('#parent1');
var child1 = document.querySelector("#child1");
var grandchild1 = document.querySelector("#grandchild1");

parent1.addEventListener('click', function(){
    parent1.style.background = "black"
});

child1.addEventListener('click',function(){
    child1.style.background = "blue"
})

grandchild1.addEventListener('click',function(){
    grandchild1.style.background = "green"
})

var parent2 = document.querySelector('#parent2');
var child2 = document.querySelector("#child2");
var grandchild2 = document.querySelector("#grandchild2");

parent2.addEventListener('click', function(){
    parent2.style.background = "black"
});

child2.addEventListener('click',function(){
    child2.style.background = "blue"
    event.stopPropagation()
})

grandchild2.addEventListener('click',function(){
    grandchild2.style.background = "green"
    event.stopPropagation()
})

var parent3 = document.querySelector('#parent3');
var child3 = document.querySelector("#child3");
var grandchild3 = document.querySelector("#grandchild3");

parent3.addEventListener('click', function(){
    parent3.style.background = "black"
},true);

child3.addEventListener('click',function(){
    child3.style.background = "blue"
},true)

grandchild3.addEventListener('click',function(){
    grandchild3.style.background = "green"
})



var person = {
    fname : "Maharshi",
    lname : "Limbachiya"
}

function name() {
    return `My name is ${this.fname} ${this.lname}`
}

document.getElementById("p1").innerHTML = name.call(person)

var lang = ["Javascript", "Java", "Python"]

function langs(l1, l2, l3){
    return `My name is ${this.fname} ${this.lname} and I have a knowledge of ${l1}, ${l2} and ${l3}`
}

document.getElementById("p2").innerHTML = langs.apply(person,lang)
console.log(langs.apply(person,lang));

function disp(){
    return `My name is ${this.fname} ${this.lname}`
}

var a = disp.bind(person)
document.getElementById("p3").innerHTML = a()
console.log(a());

