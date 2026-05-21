/* Create an object return full name firstname "john" 2ndname  Doe return full name*/

/* 1st own Method */
// const obj = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 90
// }

// console.log(`Full Name is = ${obj.firstName} ${obj.lastName}`);

/* Correct Code Method */

const info = {
    firstName : "John",
    lastName : "Doe",
    fullName : function(){
        return this.firstName + " " + this.lastName;  
        // "this" shows firstName & lastName inside the object
    }
};
console.log(info.fullName());