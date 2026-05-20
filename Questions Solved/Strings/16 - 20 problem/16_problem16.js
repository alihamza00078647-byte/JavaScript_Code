const str = prompt("Enter String: ");

revStr = "";
len = str.length;
for (let i = 1; i<=len; i++){
    revStr += str[len - i];
}

// console.log(str);

// console.log(`String is Palindrome ${revStr}`);
if (str !== revStr){
    console.log(`String is Not Palindrome`);
}
else{
    console.log(`String is Palindrome`);
}