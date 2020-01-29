function outer(fname, lname){
    function inner(){
        return `My name is ${fname} ${lname}`
    }
    return inner()
}
var fname = "Maharshi"
var lname = "Limbachiya"
console.log(outer(fname, lname));

