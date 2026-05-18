const year = parseInt(prompt("Enter The year: "));

if (year % 4 === 0 || year % 100 === 0 && year % 400 === 0)
{
    console.log(`${year} is a Leap year`);
}
else{
    console.log(`${year} is Not a Leap year`);
}