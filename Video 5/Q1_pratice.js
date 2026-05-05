
function vowelFunction(stringTaker, count)
{
    console.log(stringTaker);
    // print the whole string 
    count = 0;
    // Variable that Count Vowels
    for (str of stringTaker)
    // Iterate String alphabet one by one
    {
        if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' || str === 'A'
            || str === 'E' || str === 'I' || str === 'O' || str === 'U')
        {   // Filter Vowel Alphabets from string
        
            console.log(`Vowel in Given String = ${str}`);
            // print vowels in given String
            count++;
            // increment Count By 1
        }
    }
    console.log(`Number of Vowels is ${count}`);
}


userInput = prompt("Enter your String: ");
// Given String into a variable userInput

vowelFunction(stringTaker = userInput);
// function Call by Given userInput to Argument