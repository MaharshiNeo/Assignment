var text3 = "Apple, Banana, Kiwi";
var res1 = text3.slice(7, 13);
console.log(res1);


var res2 = text3.slice(-12, -6);
console.log(res2);

var res3 = text3.slice(7)
console.log(res3);

var res4 = text3.substr(7, 6)
console.log(res4);

var text4 = "Please visit Microsoft!";
var res5 = text4.replace("Microsoft", "W3Schools");
console.log(res5);

var res6 = text4.replace(/microsoft/i, "W3Schools");
console.log(res6);

var text5 = "Please visit Microsoft and Microsoft!";
var res7 = text5.replace(/Microsoft/g, "W3Schools");
console.log(res7);