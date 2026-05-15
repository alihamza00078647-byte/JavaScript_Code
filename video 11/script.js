// const person = {
//     fullName : "Ali Hamza",
//     rollNo : 290,
//     Age : 90,
//     address() {
//         console.log(`Student Name is ${this.fullName} & RollNo is ${this.rollNo}`);
//     }
// }
// person.address();

const employee = {
    taxCal () {
        console.log("Tax Rate is 10%");
    }
}
const shehroz = {
    pay : "23000",
    taxCal() {
        console.log("Tax Rate is 20%")
    }
}
shehroz.__proto__ = employee;
console.log(shehroz);
