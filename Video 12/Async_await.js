// Return a Promise
async function hello() {
    console.log("Hello World!");
}
hello();

async function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data!");
            console.log("Lahore Data!");
            resolve(200);
        }, 3000);
    })
}

/* Will Through an Error Because await is only use in async function*/
// await api();

async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd Call
    await api(); //3rd Call
};
getWeatherData();

console.log("Ali");
