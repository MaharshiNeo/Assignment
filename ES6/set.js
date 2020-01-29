s1 = new Set()
s1.add(5)
console.log(s1);
console.log();

console.log(s1.size);
console.log();
s1.clear()

console.log(s1);
console.log();

var arr = [1, 2, 3, 4, 5, 5]
s2 = new Set(arr)

console.log(s2);
console.log();
s2.delete(2)
console.log(s2);
console.log();

console.log(s2.entries());
console.log();

s2.forEach(s => {
    console.log(s);
    
});
console.log();

console.log(s2.has(3));
console.log(s2.has(10));
console.log();
s2.add({a: 20})
console.log(s2.values());
console.log(s2.keys());

