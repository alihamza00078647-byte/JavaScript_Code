const valuesInArray = [10, 20, 40, 90, 1212];

// let [a , b, c] = valuesInArray;
// Use destructuring assignment to declare multiple variables from an array

// console.log(a , b, c);

/* Skipping Values */
// let [a , , c] = valuesInArray;
// console.log(a , c);



/* Using  Rest Operator */

let [a , b, ...Rest] = valuesInArray;
// a & b like above but
// Using Rest Operator rest of the values assign to rest variabel (can Change Name)

console.log(a , b, Rest);
