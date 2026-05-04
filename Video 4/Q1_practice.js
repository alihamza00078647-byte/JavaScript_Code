let students = [85, 97, 44, 37, 76, 60];
let avg_marks, sum;
sum = 0;

// Solve the problem Using for in loop

for (marks of students)
{
    sum += marks;
    avg_marks = sum / students.length;

}
// Writing line 10 will out of loop Understand Better
console.log("The Average is = ", avg_marks);




// for (i = 1; i <= students.length; i++)
// {
//     sum += students[i] - 1;
//     avg_marks = sum / students.length;
// }

// console.log(avg_marks);