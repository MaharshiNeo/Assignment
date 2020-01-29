let m = new Map()

m.set(1, "a")
m.set(2, "b")
m.set(3, "c")

console.log(m);
console.log();

console.log(m.entries());
console.log();

console.log(m.get(2));
console.log();

console.log(m.has(1));
console.log(m.has(6));
console.log();

console.log(m.keys());
console.log();

console.log(m.values());
console.log();

m.delete(2)
console.log(m);
console.log();

m.clear()
console.log(m);
