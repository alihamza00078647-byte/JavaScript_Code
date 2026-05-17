/* 1st Method */
// function secondLargestSortedArray(list){

//     const sortedArr = [...list].sort((a, b) => b - a);
//     if (sortedArr.length < 2){
//         return undefined;
//     }    

//     for (let i = 1; i < sortedArr.length; i++){
//         if (sortedArr[i] !== sortedArr[0])
//         {
//             return sortedArr[i];
//         }
//     }
//     return undefined;
// }
// const list = [2, 4, 6, 7, 8, 9, 90, 89];
// console.log(secondLargestSortedArray(list));


/* 2nd Method */

function secondLargestNumber(arr){
    let max = -Infinity , result = -Infinity;
    
    if (arr.length < 2){
        return undefined;
    }
 
    for (let nr of arr)
    {
        if (nr > max)
        {
            result = max;
            max = nr;
        }
    else if (nr < max && nr > result){
        result = nr;
    }
}
    return result;
}

const arr = [1, 34, 56, 78, 90, 3232, 6541];

console.log(secondLargestNumber(arr));