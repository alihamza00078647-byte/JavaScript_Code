const arrOfNumbers = [1, 2, 4, 6, 17, 19, 21, 22, 24];

// Filter Even Number from Array
let evenNumbers = arrOfNumbers.filter((value) =>{
    // Values Goes To Value Variale
    return value % 2 === 0;
    // After Condition satisfy even Numbers will return
});

console.log(`Array of Even Numbers =  ${evenNumbers}`);