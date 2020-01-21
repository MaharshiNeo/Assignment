var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
console.log(fruits);

fruits.push("Kiwi");      
console.log();

console.log(fruits);

fruits.shift();
console.log();

console.log(fruits);

fruits.unshift("Lemon"); 
console.log();
console.log(fruits);

fruits[fruits.length] = "Watermelon";
console.log();
console.log(fruits);

var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log();

console.log(fruits2);

fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 2, "Lemon", "Kiwi");
console.log();

console.log(fruits3);

var fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var fruits5 = fruits4.slice(1);
console.log();
console.log(fruits5);

var fruits6 = fruits4.slice(1, 3);
console.log();
console.log(fruits6);







