// Default
function add(x, y = 12){
    return x + y
}

var a = add(10)
console.log(a);
console.log();

// Rest
function ln(a, ...y){
    return a * y.length
}

var b = ln(3, 4, 5)
console.log(b);
console.log();

// Spread
function spread(x, y, z){
    return x + y + z
}

var c = spread(...[1, 2, 3])
console.log(c);
