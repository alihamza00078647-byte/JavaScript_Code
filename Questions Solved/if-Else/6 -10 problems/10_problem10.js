const side1 = parseInt(prompt("Enter Sides of Triangle: "));
const side2 = parseInt(prompt("Enter Sides of Triangle: "));
const side3 = parseInt(prompt("Enter Sides of Triangle: "));


if ((side1 + side2) > side3 && (side2 + side3) > side1 && (side3 + side1) > side1)
{
    console.log(`Side 1: ${side1} Side 2: ${side2}Side 3: ${side3} Form a Triangle`);
}
else{
    console.log(`Side 1: ${side1} Side 2: ${side2}Side 3: ${side3} Cannot Form Triangle`);
}
