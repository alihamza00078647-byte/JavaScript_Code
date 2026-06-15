function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Returned Data Set1");
            resolve("Success!");
        }, 3000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Returned Data Set2");
            resolve("Success!");
        }, 3000);
    });
}

// console.log("Fetching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
});

console.log("Fetching data2....");
let p2 = asyncFunc2();
p2.then((error) => {
    console.log(error);
});


/* 2nd Method To resolve the Q */

// Outer function
console.log("Fetching data1....");
asyncFunc1().then((res) => {
    // Inner Function
    console.log("Fetching data2....");
    asyncFunc2().then((error) => {});
});