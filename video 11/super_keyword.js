class person {
    constructor(name) {
        console.log("Enter Person Class!");
        this.salary = 12000;
        this.name = name;
    }
    hello() {
        console.log("Hello world!");
    }
    wakeup() {
        console.log("Wakeup Every Morning!");
    }
    sleep() {
        console.log("Sleep At 9:00 O'Clock");
    }
}

class Engineer extends person{
    constructor(name) {
        // console.log("Enter Engineer Class!");

        super(name); // Will Invoke Parent Constructor 
        
        // this.salary = 12000;
        // console.log("Exit Engineer Class!");
    }
    work() {
        super.hello();  // To Call / Access Parent Class methods Directly
        console.log("Let Build Somthing Great!");
    }
}

let o = new Engineer("Hamza");
// console.log(o);