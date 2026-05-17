let originalArray = [12, 34, 56, 78, null, "Wow", false];

let partOfArray = originalArray.splice(2, 5, "Hamza", "Shehroz")

console.log(partOfArray);
// It will Return The deleted Value

console.log(originalArray);

// Consoles the Original Array