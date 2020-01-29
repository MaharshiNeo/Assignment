// Higher-order functions are functions that take 
// other functions as arguments or return functions as their results.
// So most of the methods related to array are higher order function.
// Because they all take callback function as an argument.
// For example

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(function(fruit,i){
    console.log(fruit);
    
})
console.log();

var numbers1 = [45, 4, 9, 16, 25];
numbers2 = numbers1.map(function(num, i){
    return num * 2
})
console.log(numbers2);
console.log();
