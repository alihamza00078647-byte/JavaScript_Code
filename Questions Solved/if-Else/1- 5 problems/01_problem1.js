const num = parseInt(prompt("Enter Number to check to Postive or Negative: "));


if (num > 0)
{
    console.log(`${num} a is Positive Number`);
}
else if(num === 0)
{
    console.log(`Number is Zero`);
}
else{
    console.log(`${num} is a Negative Number`);
}