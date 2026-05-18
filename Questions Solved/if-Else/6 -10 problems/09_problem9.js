const no1 = parseInt(prompt("Enter 1st Number: "));
const no2 = parseInt(prompt("Enter 2nd Number: "));
const no3 = parseInt(prompt("Enter 3rd Number: "));
let max;

if (no1 > no2 && no1 > no3)
{
    max = no1;
}
else if(no2 > no1 && no2 > no3)
{
    max = no2;
}
else{
    max = no3;
}

console.log(`Maximum Number is = ${max}`);