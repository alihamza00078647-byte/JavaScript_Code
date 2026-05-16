// IIFE (immediately invoked )function Expression.

async function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", id);
            resolve("Successfully Transfer!");
        }, 2000);
    });
}


(async function (){
    console.log("Getting data1...");
    await getData(1); //1st call
    console.log("Getting data2...");
    await getData(2); //2nd Call
    console.log("Getting data3...");
    await getData(3); //3rd Call
})();

// getWeatherData();