people = [{
    fname: "Maharshi",
    lname: "Limbachiya"
},{
    fname: "Meet",
    lname: "Patel"
}];

function getPeople(){
    
    setTimeout(() => {
        output = ""
        people.forEach((person,i) => {
            output =output + person.fname + " "
        })
        console.log(output);
    },1000)
}


function pushPerson(person, callback){
    setTimeout(() => {
        people.push(person)
        callback()
    },2000)
}


pushPerson({fname:"Darsh",lname:"Modi"}, getPeople)