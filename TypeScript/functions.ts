export{}

function add1(num1 : number, num2 : number) : number{
    return num1 + num2
}

console.log(add1(5, 10));

// console.log(add1(5, "10"));

console.log();

function add2(num1? : number, num2? : number) : number{
    return num1 + num2
}
console.log(add2(5));
console.log();

function add3(num1 : number, num2? : number) : number{
    if(num2){
        return num1 + num2
    }
    else{
        return num1
    }
}
console.log(add3(5));
console.log();

function add4(num1 : number, num2 : number = 10) : number{
    
    return num1 + num2
}
console.log(add4(5));
console.log();


function name1(person : {firstname : string, lastname : string}){
    return `${person.firstname} ${person.lastname}`
    
}

let person ={
    firstname : "Maharshi",
    lastname : "Limbachiya"
}

console.log(name1(person));
console.log();

