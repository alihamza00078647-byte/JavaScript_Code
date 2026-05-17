const nestedArray = [1, 2, 3, [52, 87], 90, [12, 45, 755]];
/* 1st Method */
// console.log(nestedArray.flat(1));

/* 2nd Method */

function flatRecursiveArray(nestedArray){
    let newArray = [];
    // Create new Array
    for (let i = 0; i<=nestedArray.length - 1; i++)
        // Iterate to array length
    {
        let elements = nestedArray[i];
        // Taking elements at index i
        if(Array.isArray(elements))
            // if there is an Array inside array use spread operator to merge 
        {
            newArray.push(...flatRecursiveArray(elements));
        }
        else{
            newArray.push(elements);
            // if element itself push in new Array
        }
    }
    return newArray;
}

let flatted = flatRecursiveArray(nestedArray);
// Store newArray in Flatted Variable

console.log(flatted);


