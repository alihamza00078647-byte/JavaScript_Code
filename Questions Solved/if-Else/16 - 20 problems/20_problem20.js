const n1 = parseInt(prompt("Enter 1st Number : "));
const operator = prompt("Enter Operator (+ , - , / , % , * ) ");
const n2 = parseInt(prompt("Enter 2nd Number : "));
let max;

if (operator === '+'){
    max = n1 + n2;
}
else if (operator === '-'){
    max = n1 - n2;
}
else if (operator === '*'){
    max = n1 * n2;
}
else if (operator === '/'){
    max = n1 / n2;
}
else if (operator === '%'){
    max = n1 % n2;
}

console.log(`${n1} ${operator} ${n2} = ${max}`);
