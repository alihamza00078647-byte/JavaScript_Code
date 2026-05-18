function authentication(userName, password){
    const userName1 = userName;
    const password1 = password;
    console.log(`User Name is ${userName1}`, `PASSWORD is ${password1}`);

}

const signIn = confirm("Do You want to Sign in");

if (signIn === true)
{
    const userName = prompt("Enter your UserName Name: ");
    const password = prompt("Enter your password: ");
    authentication(userName,password);
     
}
else{
    console.log("Log In Fail!!!");
}



