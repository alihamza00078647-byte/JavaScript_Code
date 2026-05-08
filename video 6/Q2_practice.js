let div = document.querySelectorAll(".box");
console.dir(div);

// div[0].innerText = "Hello 1st one"
// div[1].innerText = "Hello 2nd one"
// div[2].innerText = "Hello 3rd one"

let i = 0;
for (d of div)
{
    d.innerText = `Unique Div ${i}`
    i++;
}

// for (let i = 0; i<=2; i++)
// {
//     // div[i].innerText = "KO ni chi wa"; 
//     if (i === 0)
//     {
//         div[i].innerText = "Konichiwa"; 
//     }
//     if (i === 1)
//     {
//         div[i].innerText = "Mena-san"; 
//     }
//     if (i === 2)
//     {
//         div[i].innerText = "Orewa";
//     }
// }