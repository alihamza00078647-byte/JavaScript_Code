let str = "Mr Red was sitting on the bench".toLowerCase();

let newStr = str.split(" ");



for (let i = 0; i< newStr.length; i++){
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substring(1);
}
console.log(newStr.join(" "));



