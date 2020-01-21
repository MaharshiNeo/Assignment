class Car {
    constructor(brand) {
      this.brand = brand;
    }
    get name() {
      return this.brand;
    }
    set name(brand) {
      this.brand = brand;
    }
}
  
c = new Car("Ford");
console.log(c.name);
console.log();

c.name = "Ferrari"
console.log(c.name);
