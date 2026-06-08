let arrOfNumbers = [4, 5, 89, 99];


// Pass Array to Sq Variable to console square
arrOfNumbers.forEach((n) => {
    console.log(`Square of ${n} is = ${n*n}`);
});

const newArray = arrOfNumbers.map(n => n * 3);
// console.log(newArray)


const filterArray = arrOfNumbers.filter(n => n%2===0);
// console.log(filterArray)

const reduceNum = arrOfNumbers.reduce((prev, next) => {
    return prev + next
});
console.log(reduceNum)
