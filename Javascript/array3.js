var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse()
console.log();

console.log(fruits);

var numbers1 = [45, 4, 9, 16, 25];
numbers1.forEach(function(num,i){
    console.log(num);
    
})
console.log();

numbers2 = numbers1.map(function(num, i){
    return num * 2
})
console.log(numbers2);

numbers3 = numbers1.filter(function(num, i){
    return num>18
})
console.log();

console.log(numbers3);

var sum = numbers1.reduce(function(total, num, i){
    return num + total
})
console.log();
console.log(sum);

var x = numbers1.every(function(val, i){
    return val > 18
})
console.log();
console.log(x);

x = numbers1.some(function(val, i){
    return val > 18
})
console.log();
console.log(x);

var number4 = numbers1.find(function(num, i){
    return num > 18
})
console.log();
console.log(number4);



