/* Remove Vowels From String */
let str = "Mr Red was sitting on the bench".toLowerCase();
let stringConsonent = "";


for (let letter in str){

    if (str[letter] === 'a' || str[letter] === 'e' || str[letter] === 'i' || str[letter] === 'o' || str[letter] === 'u'){
        console.log("Vowels");
    } else { 
        stringConsonent += str[letter];
    }
}

console.log(stringConsonent);

