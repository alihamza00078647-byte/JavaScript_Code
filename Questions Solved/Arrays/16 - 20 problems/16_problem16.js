/* 1st method */
let origArray = [90, 78, 67, 45, 23, 1];
// origArray.reverse();
// console.log(origArray);


/* 2nd Method */
const revArr = [];
let lenArr = origArray.length;
// Take length as condition for loop

for (let i = 1; i <= lenArr; i++)
    // if we Assign i = 0 it will return undefined
{
    revArr.push(origArray[lenArr - i]);
    // add All values at the End
}
console.log(revArr);

console.log(Array(revArr));



