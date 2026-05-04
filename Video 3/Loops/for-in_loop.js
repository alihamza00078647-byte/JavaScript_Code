const dict = {
    Cat: "Billi",
    Dog: "Kutta",
    Elepphant: "Haathi",
    Pigeon: "Kabootar",
    Sparrow: "Chiriya"
};

// let val;
// for (let val in dict) {
//     console.log("key = ",val, "Value =", dict[val]);

// }





let user, res;
user = prompt("Enter a Word in Dictionary: ");
for (var val in dict) {

    if (val === user)
    {
        res = dict[val];
        // console.log(user);
    }
}
console.log("The Meaning is", res);