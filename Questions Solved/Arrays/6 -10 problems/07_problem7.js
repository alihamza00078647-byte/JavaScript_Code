const a = [23, 45, 67, 98];

let productOfArray = a.reduce((preValue, currValue) => {
    return preValue * currValue;
});


console.log(productOfArray);