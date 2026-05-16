function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", id);
            resolve("Successfully Transfer!");
        }, 2000);
    });
}

// This is Promise Chain / Promise Chaining.
getData(1)
    .then((res) => {
    return getData(2);
}).then((res)=> {
    return getData(3);
}).then((res)=> {
    console.log(res);
});