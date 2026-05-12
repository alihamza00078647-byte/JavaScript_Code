let changeColor = document.querySelector("#red");
let mode = "white";


changeColor.addEventListener("click", () => {
    if (mode === "white"){
        mode = "black";
        document.body.style.backgroundColor = mode;
    } else {
        mode = "white";
        document.body.style.backgroundColor = mode;
    }
    console.log(mode);
});


// changeColor.addEventListener("click", () =>{
//     document.body.style.backgroundColor = "Black";
// });