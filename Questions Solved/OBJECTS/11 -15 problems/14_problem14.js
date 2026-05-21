const countProperties = {
    name : "ali",
    contact : 687675,
    city : "Paris",
    TA : "Harry",
    zip :39450
};

// let count = 0;

// for (let properties in countProperties){
//     console.log(properties);
//     count++;
// }
// console.log(`Object has ${count} properties`);

/* 2nd Method */
const key = Object.keys(countProperties).length;
console.log(`Object has ${key} properties`);
