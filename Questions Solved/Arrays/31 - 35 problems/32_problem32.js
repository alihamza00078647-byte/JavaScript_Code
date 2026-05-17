// const a = [12, 45, 67, 78, 34, 54];

// let mul = a.flatMap(num => (num , num * 2));

// console.log(mul);

/* Why we Use flatmap Method */
const a = [12, 45, 67];

let mul = a.map(num => [num, num * 2]);

console.log(mul);