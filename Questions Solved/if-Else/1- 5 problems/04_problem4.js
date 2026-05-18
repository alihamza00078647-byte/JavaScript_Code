const name = prompt("Enter your Name: ");

const grades = parseInt(prompt("Enter your Grades (1-1200): "));

const marks = (grades / 1200) * 100;

// console.log(marks);

if (marks >= 90) {
    console.log(`${name}'s Marks ${marks} : Grade 'A+' `);
}
else if (marks > 75 && marks <= 89) {
    console.log(`${name}'s Marks ${marks} : Grade 'A' `);
}
else if (marks >= 60) {
    console.log(`${name}'s Marks ${marks} : Grade 'B' `);
}
else if (marks >= 50) {
    console.log(`${name}'s Marks ${marks} : Grade 'C' `);
}

else {
    console.log(`${name}'s Marks ${marks} : Grade 'F' `);
}
