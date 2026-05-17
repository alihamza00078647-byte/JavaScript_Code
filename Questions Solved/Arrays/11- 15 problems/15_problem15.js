const listOne = [12, 44, 55, 66];

const listTwo = [12, 22, 45, 66];


let commonNumberArray = listOne.filter(items => listTwo.includes(items));
// find Common Values In 2 Arrays

console.log(commonNumberArray);

