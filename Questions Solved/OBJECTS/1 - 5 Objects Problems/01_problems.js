const car = {
    color : ["Red" , "Blue", "green", "Orange"],
    Model : ["2020", "2021", "2022", "2023", "2024"],
    Brand : ["BMW", "GMW", "QMW", "AMW"]
};

for (key of Object.keys(car))
{
    console.log(`Cars are available ${key} of : ${car[key]}`);
}