interface Person1{
    firstname : string,
    lastname : string,
}

let person1 = {
    firstname : "Maharshi",
    lastname : "Limbachiya",
}

function Name1(person1 : Person1) : string{
    return `${person1.firstname} ${person1.lastname}`
}

console.log(Name1(person1));
console.log();


interface Person2{
    firstname : string,
    lastname ?: string,
}

let person2 = {
    firstname : "Maharshi",
}

function Name2(person2 : Person2) : string{
    if(person2.lastname){
        return `${person2.firstname} ${person2.lastname}`
    }
    else{
        return `${person2.firstname}`
    }
}

console.log(Name2(person2));
console.log();
