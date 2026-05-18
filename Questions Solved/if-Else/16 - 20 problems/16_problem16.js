function emailValidation(email){
    const regex = /^&.@#$/;

    if (regex.test(email)){
        console.log("Email is Valid");
        return true
    }
    else{
        console.log("Email is Not Valid");
        return false
    }
}

console.log(emailValidation("text"));
console.log(emailValidation("text@example.com"));
// emailValidation("text");