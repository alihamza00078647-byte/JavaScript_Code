const arryMinMax = [12, 34, 5, 4, 98, 123, 545, 798, 0];

let max = arryMinMax.reduce((preValue, currValue)=>{
    let compareMaxNumber = preValue > currValue ? preValue : currValue;
    return compareMaxNumber;
});


let min = arryMinMax.reduce((preValue, currValue)=>{
    let compareMinNumber = preValue > currValue ? currValue : preValue;
    return compareMinNumber;
});

console.log(`The Minimum Number in Array is = ${min}`);
console.log(`The Maximum Number in Array is = ${max}`);