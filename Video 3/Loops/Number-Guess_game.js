// let n = Math.random(1, 5);
// console.log(n);


let n = 25;
userChoice = Number(prompt("Guess The Number: "));


while (true)
{
    if (n === userChoice)
        {
            console.log("Congratulations, YOU WON!");
            break;
        }
    userChoice = Number(prompt("Guess Again: "));
}


