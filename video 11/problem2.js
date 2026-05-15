class User {
    constructor(name, Email){
        this.name = name;
        this.Email = Email;
    }

    viewData() {
        console.log(`Name is : ${this.name} & Email is ${this.Email}`);
    }
}
class Admin extends User{
    constructor(name, email) {
        super();
        console.log("New Data!");
        this.name = name;
        this.email = email;
    }
    editedData() {
        console.log(`Name is : ${this.name} & Email is ${this.Email}`);
    }
}


let userObj = new User("Ali", "Alihamza45678@gmail.com");

let adminObj = new Admin("Ai", "Ai@1234");


