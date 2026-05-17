const l1 = [2, 3, 4, 5, 6, 7, 8, 9];
const l2 = [3, 4, 6, 8, 0, 12, 30, 40];
const intersectedValues = [];


for (let i = 0; i< l1.length; i++){
    for (let j = 0; j<l2.length; j++){
        if (l1[i] === l2[j]){
            intersectedValues.push(l1[i]);
        }
        else{
            continue;
        }
    }
}

console.log(intersectedValues);