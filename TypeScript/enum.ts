export{}
enum media1 {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}
console.log(media1[0]);
console.log();

enum media2 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}
console.log(media2[2]);
console.log();

enum media3 {
    Newspaper = 1,
    Newsletter = 5,
    Magazine,
    Book
}
console.log(media3[5]);
console.log();

enum media4 {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10,
}
console.log(media4[5]);