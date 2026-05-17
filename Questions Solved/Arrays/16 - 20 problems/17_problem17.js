const Num1Array = [1, 2, 3, 4, 5];

const Num2Array = [12, 24, 36, 42, 55];

let someArray = Num1Array.some(item => item % 2 === 0);
// Some Method Check the if Even Number in Array if has Return True
// Returns False if Not. Always Return true even if the condition satisfy at ones

console.log(someArray); // TRUE


let everyArray = Num2Array.every(item => item %2 === 0);
// Will Return only when all conditions are satisfy
// if only one not even number returns false

console.log(everyArray); //FALSE
