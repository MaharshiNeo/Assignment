person = new Object()
person.firstname = "Maharshi"
person.lastname = "Limbachiya"
person.display = function () {
    return person.firstname + " " + person.lastname
}

console.log(person.display());

person.age = 20

person.display = function () {
    return person.firstname + " " + person.lastname + " " + person.age
}
console.log();

console.log(person.display());

console.log();

for (i in person){
    console.log(person[i]);
    
}


delete person.age
console.log();
for (i in person){
    console.log(person[i]);
    
}

