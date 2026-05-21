const std = {
    name: "Ali",
    age: 21,
    email: "asdf@gmail.com"
};


if (std.hasOwnProperty("email"))
{
    console.log("Property Exist!");
}
else{
    console.log("Property Not Exist!");
}