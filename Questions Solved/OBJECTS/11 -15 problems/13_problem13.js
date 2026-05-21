const friends = {
    name : "Ali",
    address : {
        city : "New York",
        zip : 2122,
    }
}

console.log(friends);

// structureClone will print a deep clone of Object 
const deepCopy = structuredClone(friends);

console.log(deepCopy);