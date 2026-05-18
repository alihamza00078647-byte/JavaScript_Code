let character = prompt("Enter One Character Only: ").toLowerCase();

let len = character.length;

if (len !== 1) {
    console.log("Please! Enter Valid Input!");
} 
else {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
        console.log(`${character} is Vowel`);        
    }
    else{
        console.log(`${character} is Consonent`);
    }
}


