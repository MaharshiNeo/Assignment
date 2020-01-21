var person  = {
    firstname: "Maharshi",
    lastname: "Limbachiya",
    age: 20,
    display: function(){
        console.log(this.firstname + " " + this.lastname + " " + this.age)   
    },
}

console.log(person.firstname + " " + person.lastname + " " + person.age)
person.display()