const str = "Price 123 is very good but 100 is ideal";

let dynamic = /\d+/g;

let pat = str.match(dynamic).join('');

console.log(dynamic, pat);