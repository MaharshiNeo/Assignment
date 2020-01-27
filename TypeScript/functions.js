"use strict";
exports.__esModule = true;
function add1(num1, num2) {
    return num1 + num2;
}
console.log(add1(5, 10));
// console.log(add1(5, "10"));
console.log();
function add2(num1, num2) {
    return num1 + num2;
}
console.log(add2(5));
console.log();
function add3(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add3(5));
console.log();
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add4(5));
console.log();
function name(person) {
    return person.firstname + " " + person.lastname;
}
var person = {
    firstname: "Maharshi",
    lastname: "Limbachiya"
};
console.log(name(person));
console.log();
