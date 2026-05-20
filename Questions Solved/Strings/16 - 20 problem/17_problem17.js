let str = "Hello Mena San";

/* 1st Method */
// let charString = str.split();
// console.log(charString);

let charString = [... str];
console.log(charString);






let convertString = charString.join('');
console.log(convertString);