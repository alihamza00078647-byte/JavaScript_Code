console.log("One");
console.log("Two");

function greets(){
    console.log("Hello world");
}

setTimeout(greets, 2000); //4000ms

console.log("Three");
console.log("Four");

// CallBack Functions
function sum(a, b){
    console.log(a + b);
}

function CallBack(a, b, CallBack){
    CallBack(a, b);
}
CallBack(4, 3, sum);
