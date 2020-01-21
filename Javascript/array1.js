var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
console.log();

for(var i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
    
}
console.log();

fruits.forEach(function(fruit,i){
    console.log(fruit);
    
})
console.log();
console.log(Array.isArray(fruits));



