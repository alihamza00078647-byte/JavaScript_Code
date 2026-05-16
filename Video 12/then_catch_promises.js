const getPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("1st Message");
            resolve("Success!");
            // reject("Error");
        }, 3000);
    });
}

// let res = getPromise();
// console.log(res);

let result = getPromise();
result.then((res) => {
    console.log("Ok MSG!", res);
});

// result.catch((error)=> {
//     console.log("Hello!", error);
// });
