let anArr = [1, 2, 3, 4, 5, 6, 7];
let len = anArr.length;
// Value find after Sum
let targetValue = 9;

while (true){
    let i1 = Math.floor(Math.random() * len);
    // Generate 1st Random index
    let i2 = Math.floor(Math.random() * len);
    // Generate 2nd Random index
    if((i1 + i2) !== targetValue){
        continue;
    } else {
        console.log(`${i1} + ${i2} = ${targetValue}`);
        break;
    }
}