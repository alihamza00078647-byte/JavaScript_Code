class person {
    // It will Work
    constructor(salary) {
        this.salary = salary;
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
    // It will Not work
    // constructor(salary) {
    //     this.salary = salary;
    // }
    work() {
        console.log("Solve Problems!");
    }
}

let o = new Engineer(12000);
console.log(o);