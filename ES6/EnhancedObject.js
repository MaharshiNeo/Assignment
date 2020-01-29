// ES6
var ob1 = {
    add(a, b){
        return a + b
    },
    mul(a, b){
        return a * b
    }
}
console.log(ob1.add(1, 2));
console.log(ob1.mul(3, 6));

// ES5

var ob2 = {
    add : function(a, b){
        return a + b
    },
    mul : function(a, b){
        return a * b
    }
}

console.log(ob2.add(1, 2));
console.log(ob2.mul(3, 6));
