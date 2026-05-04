let ar = [10, 20, 30, 40, 50];

// map is similar to forEach but It Returns new Array

// let Newarray = ar.map((value) => {
// return value**2;
// });
// console.log(Newarray);


// Filter Method

// let filter_method = ar.filter((num) => {
//     return num % 2 !== 0;
// });
// console.log(filter_method);



// Reduce method

// previousValue variable is said to be Accumulator.......

let output = ar.reduce((pervious_value, current_value) => {
    // return pervious_value + current_value;       // To Find Sum 
    return pervious_value > current_value ? pervious_value : current_value;
});

console.log(output);







