export{}
let x : boolean = true
console.log(x);
console.log();

let y : number = 1
console.log(y);
console.log();

let name : string = "Maharshi"
console.log(name);
console.log();

let a : boolean = null
let b : string = undefined

console.log(a,b);
console.log();

let list1 : number[] = [1,2,3]
console.log(list1);
console.log();

let list2 : Array<number> = [1,2,3]
console.log(list2);
console.log();

let person : [string, number] = ["Maharshi", 20]
console.log(person);

enum colors {red, blue, green}
let c : colors = colors.blue
console.log(c);
console.log();

let random : any = 20
console.log(random);
random = "Maharshi"
console.log(random);
random = true
console.log(random);

console.log(random.name);
console.log();

let random1 : unknown = 20
console.log(random1);
random1 = "Maharshi"
console.log(random1);
random1 = true
console.log(random1);
console.log();

let multi : number | string 
multi = "Maharshi"
console.log(multi);
multi = 10
console.log(multi);




