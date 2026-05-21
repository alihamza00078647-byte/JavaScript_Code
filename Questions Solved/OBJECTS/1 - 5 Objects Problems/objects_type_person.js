function personInfo(first, last, age, email){
    this.firstName = first;
    this.lastName = last;
    this.Age = age;
    this.Email = email;
};
// Alread sovled problem 05 from "this" keyword

const aliInfo = new personInfo("Ali", "Hamza", 21, "asd@gmail.com");
// function Name with new keyword & Assign values to it
console.log(aliInfo);

const waqasInfo = new personInfo("Waqas", "Sufa", 19, "rtyui@gmail.com");
// Same as above
console.log(waqasInfo);