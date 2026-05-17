const arrayOne = ["Ali", false, null, undefined, "waqas"];
const arrayTwo = [12, 34, 56, 78, 90, "Hamza"];

/* 1st Method Concat*/
// const sum = arrayOne.concat(arrayTwo);
// console.log(sum);

/* 2nd Method + Operator*/
// const sum2 = arrayOne + arrayTwo;
// Using + Opeartor but not work
// console.log(sum2);

/* 3rd Method Spread*/

const sum3 = [... arrayOne, ... arrayTwo];
// Using Spread Method

console.log(sum3);





