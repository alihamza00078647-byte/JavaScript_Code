const age = parseInt(prompt("Enter your Age: "));


if (age < 13)
{
    console.log("You are in Childhood");
}
else{
    if (age >= 13 && age <= 19)
    {
        console.log("You are Teenager");
    }
    if (age > 19 && age < 65)
    {
        console.log("You are Adult");
    }
    if (age >= 65){
        console.log("You are Senior");
    }
}