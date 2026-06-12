let button = document.querySelector("#red");

button.addEventListener("click", (e) => {
    console.log("Hello, G!");
});
button.addEventListener("click", (e) => {
    console.log("Handler2");
});

const handler3 = () => {
    console.log("Handler3");
};

button.addEventListener("click", handler3);

button.removeEventListener("click", handler3);