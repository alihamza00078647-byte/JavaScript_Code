// Chunk Function with .lodash _Chunk Libraby manually


function chunkArray(array, ChunkLen){

    let result = [];
    // Add Values in Chunks
    for (let i = 0; i< array.length; i+=ChunkLen){
    result.push(array.slice(i, i+ChunkLen));
    }
    return result;
}

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(chunkArray(array, 3));