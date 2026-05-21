const person = {
    name : "Ali",
    age : 123
}
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));







// const companies = {
//     Com1 : "Amazon",
//     Com2 : "Google",
//     Com3 : "Uber",
//     Com4 : "Meta",
//     Com5 : "Nvidia"
// };
// // declared Object  

// function keysOfObjects(companies, sum = ""){
//     // Take object in Function and sum "" to prevent undefined or any number
//     for (keys in companies)
//     {
//         // Iterate all of them
//         sum = sum + `${keys} : ${companies[keys]}\n`;
//         // Collect all key values in Sum variable
//     }
//     return sum;
//     // Return All 
// }

// console.log(keysOfObjects(companies));
// // Function call with Argument

