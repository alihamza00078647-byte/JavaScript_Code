// async function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data!");
//             console.log("Lahore Data!");
//             resolve(200);
//         }, 2000);
//     });
// }

async function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", id);
            resolve("Successfully Transfer!");
        }, 2000);
    });
}



// async await
async function getWeatherData(){
    console.log("Getting data1...");
    await getData(1); //1st call
    console.log("Getting data2...");
    await getData(2); //2nd Call
    console.log("Getting data3...");
    await getData(3); //3rd Call
};
getWeatherData();


// Callback hell
console.log("getting data 1.....");
getData(1, () => {
    console.log("getting data 2.....");
    getData(2, () => {
        console.log("getting data 3.....");
        getData(3, () => {
            console.log("getting data 4.....");
            getData(4);
        })
    });
});


// Promises
getData(1)
    .then((res) => {
    return getData(2);
}).then((res)=> {
    return getData(3);
}).then((res)=> {
    console.log(res);
});