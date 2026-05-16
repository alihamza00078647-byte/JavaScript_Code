// Sync Approach
// function getData(dataId){
//     console.log("Data", dataId);
// }

// Async Approach
// function getData(dataId){
//     setTimeout(() => {
//         console.log("Data", dataId);
//     }, 3000);
// }

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("Data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000);
}

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