var person1 = {
    firstname: "Maharshi",
    lastname: "Limbachiya"
};
function Name1(person1) {
    return person1.firstname + " " + person1.lastname;
}
console.log(Name1(person1));
console.log();
var person2 = {
    firstname: "Maharshi"
};
function Name2(person2) {
    if (person2.lastname) {
        return person2.firstname + " " + person2.lastname;
    }
    else {
        return "" + person2.firstname;
    }
}
console.log(Name2(person2));
console.log();
