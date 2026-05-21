const person = {
    name : "Ali",
    age : 21,
    Contact : 99000000
};

person.email = "adc@gmail.com";
// add a new key in an object
delete person.age;
// We can delete an objects Using delete method
console.log(person);