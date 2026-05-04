// for-of Loop is Used for String and Arrays Data-types

// let str = "Hello World";


// for (let i of str)
// {
//     console.log("i = ", i);
// }

// Use Case
// If We want calculate the lenght of str


let str = "Javascript";
let len = 0;

for (let val of str) {
    console.log("val = ", val);
    len++;
}

console.log("Lenght is = ", len);