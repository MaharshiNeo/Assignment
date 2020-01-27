"use strict";
exports.__esModule = true;
var media1;
(function (media1) {
    media1[media1["Newspaper"] = 0] = "Newspaper";
    media1[media1["Newsletter"] = 1] = "Newsletter";
    media1[media1["Magazine"] = 2] = "Magazine";
    media1[media1["Book"] = 3] = "Book";
})(media1 || (media1 = {}));
console.log(media1[0]);
console.log();
var media2;
(function (media2) {
    media2[media2["Newspaper"] = 1] = "Newspaper";
    media2[media2["Newsletter"] = 2] = "Newsletter";
    media2[media2["Magazine"] = 3] = "Magazine";
    media2[media2["Book"] = 4] = "Book";
})(media2 || (media2 = {}));
console.log(media2[2]);
console.log();
var media3;
(function (media3) {
    media3[media3["Newspaper"] = 1] = "Newspaper";
    media3[media3["Newsletter"] = 5] = "Newsletter";
    media3[media3["Magazine"] = 6] = "Magazine";
    media3[media3["Book"] = 7] = "Book";
})(media3 || (media3 = {}));
console.log(media3[5]);
console.log();
var media4;
(function (media4) {
    media4[media4["Newspaper"] = 1] = "Newspaper";
    media4[media4["Newsletter"] = 5] = "Newsletter";
    media4[media4["Magazine"] = 5] = "Magazine";
    media4[media4["Book"] = 10] = "Book";
})(media4 || (media4 = {}));
console.log(media4[5]);
