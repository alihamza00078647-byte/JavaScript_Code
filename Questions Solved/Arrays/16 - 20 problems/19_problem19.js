const student =[
    {name : "Ali", age : 45},
    {name : "Zain", age : 32},
    {name : "Hassan", age : 30}
];
// student.sort((a, b) => a.age - b.age);
// // a.age - b.age sorts age by ascending order

// console.log(student);

/* Similar For  Strings */

student.sort((a, b) => a.name.localeCompare(b.name));

console.log(student);
