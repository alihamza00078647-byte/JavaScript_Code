
// let userInputStr = prompt("Enter String / Sentence check letter: ");
const st = "Red hair Shanks has red hair red";
// Constant string
let userInputStr = prompt("Enter String / Sentence check letter: ");;
// Find Alphabet from string

let newStr = st.match(new RegExp(userInputStr, "gi"));
//Regular Expression (RegExp) Check Words Globally => (g) 
// i means without Case Sensitivty

let count = newStr ? newStr.length: 0;
// if true return length else zero

console.log(count);