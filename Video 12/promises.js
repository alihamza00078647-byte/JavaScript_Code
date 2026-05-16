// let promise = new Promise((resolve, reject) => {
//     console.log("Hello");
//     resolve("Fullfilled!");
//     reject("Some Error Occured");
// });

function getData(id, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", id);
            // resolve("Success");
            reject("Error Occurs!");
            if (getNextData){
                getNextData();
            }
        }, 4000);
    });
}

getData(123);