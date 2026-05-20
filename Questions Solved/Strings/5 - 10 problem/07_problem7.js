let phrase = "Quaid Azam was good in English";

// console.log(phrase.split('').join("-"));
// Use can Join it using different delimiters

console.log(phrase.split(" "));


// const data = "apple banana grapes orange";
// const fruits = data.split(" ");

// console.log(fruits); // type is object


const vegetables = "Cabbage: Brenjil, Apple ;Oye ]Orange";
let allvege = vegetables.split(/[:,|;\]]\s*/).map(item => item.trim());
console.log(allvege);


// const vegetables = "Cabbage: Brenjil, Apple ;Oye|More]";
// let allvege = vegetables.split(/[:,;|\]]\s*/);

// console.log(allvege); // ["apple", "banana", "orange", "grape"]
