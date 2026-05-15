class User {
    constructor(name, Email){
        this.name = name;
        this.Email = Email;
    }

    viewData() {
        console.log(`Name is : ${this.name} & Email is ${this.Email}`);
    }
}

let userObj = new User("Ali", "Alihamza45678@gmail.com");


