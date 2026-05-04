let nNumberArray = [];

function createNumberArray(){
    let n = Number(prompt("Enter Numbers Upto n: "));
    let idx = 0;
    for ( let value = 1; value <= n; value++)
        {
            nNumberArray[idx] = value;
            idx++;
        }
}
createNumberArray();

// Calculate Sum of Input Array
let sumOfArray = nNumberArray.reduce((prev, curr) =>{
    return prev + curr;
});

// Calculate product of Input Array
let productOfArray = nNumberArray.reduce((prev, curr) =>{
    return prev * curr;
});


console.log(nNumberArray);
console.log(`Sum of Array is = ${sumOfArray}`);
console.log(`product of Array is = ${productOfArray}`);




// console.log(nNumberArray);