class parent {
    hello() {
        console.log("Hello world!");
    }
    work() {
        console.log("Do Nothing");
    }
}

class child extends parent{
    work() {
        console.log("9:00 To 5:00");
    }
}

// Gives priority to child class upon parent Class

let o = new child();
