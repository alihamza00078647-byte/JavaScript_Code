/* 1st Method to Solve problem */

// const l = [21, 34, 45, 6];
// let sum = 0;

// for (value of l)
// {
//     sum += value;
// }
// console.log(`Sum of Array is = ${sum}`);



/* Second Method to Solve problem */

const arr = [1, 4, 5, 8];

let sum = arr.reduce((prev, curr) => {
    let s = prev + curr;
    return s;
});

console.log(`Sum of Array is = ${sum}`);
