const weight = parseFloat(prompt("Enter BMI weigth: "));

if (weight < 18.5){
    console.log("UnderWeight");
}
else if (weight >= 18.5 && weight <= 24.9){
    console.log("Healthy weight");
}

else if (weight >=25.0 && weight <= 29.9){
    console.log("Over weight");
}
else{
    console.log("Obese");
}