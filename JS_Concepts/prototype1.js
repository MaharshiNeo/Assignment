function person (fname){
    this.firstname = fname
}

person.prototype.lastname = "Limbachiya"
person.prototype.age = 20
person.prototype.print = function(){
    console.log(this.firstname, this.lastname, this.age);
}

p = new person("Maharshi")
p.print()

person.prototype = {
    age : 22
}

