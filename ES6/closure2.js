function outer(fname, lname){
    
    function age(age){
        return `My name is ${fname} ${lname} and age is ${age}`
    }
    return age
}
var fname = "Maharshi"
var lname = "Limbachiya"
var age = 20
var p = outer(fname, lname)
console.log(p(age));



