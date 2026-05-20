/* 1st Method */
const originalString = `little Star`;
// let revStr = originalString.split('').reverse().join('');
// // reverse a String
// console.log(revStr);

/* 2nd Method */

let lenOfString = originalString.length;
let sum = "";

for (let i = 1; i<=lenOfString; i++)
{
    sum += originalString[lenOfString - i];
}

console.log(sum);






