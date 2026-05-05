
const vowelFunction = (stringTaker) =>
{
    console.log(stringTaker);
    // print the whole string 

    for (str of stringTaker)
    // Iterate String alphabet one by one
    {
        if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' || str === 'A'
            || str === 'E' || str === 'I' || str === 'O' || str === 'U')
            // Filter string letters
        
            console.log(`Vowel in Given String = ${str}`);
            // print vowels in given String
    }
}


userInput = prompt("Enter your String: ");

vowelFunction(stringTaker = userInput);