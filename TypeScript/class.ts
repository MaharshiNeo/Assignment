class Employee{
    name : string
    constructor(name : string){
        this.name = name
    }

    showEmp(){
        return this.name;
    }
}

let emp = new Employee("Maharshi")
console.log(emp.showEmp());
console.log();

class Eng extends Employee{
    name : string
    roll : string
    constructor(name, roll) {
        super(name)
        this.roll = roll
    }
    showEng(){
        return `My name is ${this.name} and my roll is ${this.roll} engineer`
    }
}

let eng = new Eng("Maharshi", "Software")
console.log(eng.showEmp());

console.log(eng.showEng());

console.log();

class person{
    private firstname : string
    private lastname : string
    
    constructor(fname : string, lname : string) {
        this.firstname = fname
        this.lastname = lname
    }
    get fname(){
        return this.firstname
    }

    set fname(fname){
        this.firstname = fname
    }

    get lname(){
        return this.lastname
    }

    set lname(lname){
        this.lastname = lname
    }
    show(){
        return `${this.fname} ${this.lname}`
    }
}

let p = new person("Maharshi", "Limbachiya")
console.log(p.show());
