class Car{
    constructor(brand){
        this.brand = brand
    }
    display() {
        return "The car is " + this.brand
    }
    static show(){
        return "This is a Car class"
    }
}

c = new Car("Ferrari")
console.log(c.display());
console.log();
console.log(Car.show());


class Model extends Car{
    constructor(brand, model){
        super(brand)
        this.model = model
    }
    display(){
        return super.display() + " and model is " + this.model
    }
}

m = new Model("Ford", "Mustang")
console.log();
console.log(m.display());

