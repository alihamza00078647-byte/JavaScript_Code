// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let len = originalArray.length;
// let randomizedArray = [];

// for (let i = 0; i< len; i++){
//     let index = Math.floor(Math.random() * len);
//     randomizedArray[i] = index;
// }
// console.log(randomizedArray);


/* 2nd Method */
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
let len = originalArray.length;
// Make Copy of OriginalArray  
let randomizedArray = [...originalArray];

for (let i = len -1; i>0; i--){
    // console.log(i);
    let j = Math.floor(Math.random() * (i+1));
    randomizedArray[i]  = randomizedArray[j];
    randomizedArray[j] = randomizedArray[i];
}
console.log(randomizedArray);