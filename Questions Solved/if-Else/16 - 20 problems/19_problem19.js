const n = parseInt(prompt("Enter a Number : "));

if (n % 3 === 0 && n%5===0){
    console.log(`${n} is Divisible by 3 & 5`);
}
else{
    console.log(`${n} is Not Divisible by 3 & 5`);
}