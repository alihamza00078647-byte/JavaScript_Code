/*  1 => Friday
    2 => Saturday
    3 => Sunday
    4 => Monday
    5 => Tuesday
    6 => Wednesday
    7 => Thursday
*/

let day = parseInt(prompt("Enter Number (1-7) to determine Day: "));

if (day === 1){
    console.log("Friday is a weekday");
}
else if (day === 2){
    console.log("Saturday is a weekend Day");
}
else if (day === 3){
    console.log("Sunday is a weekend Day");
}
else if (day === 4){
    console.log("Monday is a weekday");
}
else if (day === 5){
    console.log("Tuesday is a weekday");
}
else if (day === 6){
    console.log("Wednesday is a weekday");
}
else{
    console.log("Thursday is a weekday");
}

