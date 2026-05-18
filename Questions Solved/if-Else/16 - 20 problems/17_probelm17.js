// let password = prompt("Enter your password: ");

// const len = password.length;

// if (len > 1 && len < 8)
// {
//     console.log("Password Must Contains 8 Characters");
// }

// else{
//     if (password.includes("asdfghjklzxcvbnmqwertyuiop", "1234567890", "!@#$%^&*():;<>"))
//     {
//         console.log(`Password has ${len} Characters :${password} is Strong`);
//     }
//     else{
//         console.log("Password is Weak");
//     }
// }


let password = prompt("Enter your password: ");
const len = password.length;

if (len < 8) {
    console.log("Password must be at least 8 characters long");
} else {
    let hasLetter = /[a-zA-Z]/.test(password);      // checks if contains a letter
    let hasNumber = /[0-9]/.test(password);         // checks if contains a digit
    let hasSpecial = /[!@#$%^&*():;<>]/.test(password); // checks if contains a special character

    if (hasLetter && hasNumber && hasSpecial) {
        console.log(`Password has ${len} characters: "${password}" is Strong ✅`);
    } else {
        console.log("Password is Weak ❌");
    }
}
