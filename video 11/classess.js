class ToyotaCar{
    constructor(brand, mileage){
        console.log("New object Created");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("Start Car");
    }
    stop() {
        console.log("Stop Car");
    }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
// fortuner.setbrand("fortuner");
// let lexus = new ToyotaCar("Lexus", 16);
