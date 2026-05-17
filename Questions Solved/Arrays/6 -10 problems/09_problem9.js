const originalArray = [21, 43, 565, 87, 78, 21, 21, 87, 78, 0, 0];

// let filterArray = [... new Set(arrValues) ];
// EC6  method 
// console.log(filterArray);

// console.log(arrValues);

/* 2nd Method */

const secondM = originalArray.filter((item, index) => originalArray.indexOf(item) === index);
// filter items from an Array
console.log(secondM);