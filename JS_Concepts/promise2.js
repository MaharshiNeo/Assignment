people = [{
    fname: "Maharshi",
    lname: "Limbachiya"
},{
    fname: "Meet",
    lname: "Patel"
}];

function getPeople(){

        output = ""
        people.forEach((person,i) => {
            output =output + person.fname + " "
        })
        console.log(output);
}

function pushPerson(person){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            people.push(person)

            const error = true; // try true..
            if(!error){
                resolve()
            }
            else{
                reject("Failed")
            }
        },2000)
    })
}

pushPerson({fname:"Darsh", lname:"Modi"})
    .then(getPeople)
    .catch((err) => {console.log(err)})
    