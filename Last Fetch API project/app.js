const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
// console.log(BASE_URL);
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdown){
    for (currCodes in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCodes;
    newOption.value = currCodes;
    if (select.name === "from" && currCodes === "USD"){
        newOption.selected = "selected";
    } else if (select.name === "to" && currCodes === "PKR"){
        newOption.selected = "selected";
    }
    select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag =  (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    console.log(newSrc);
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let amount = document.querySelector("#amount");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value.toLowerCase(), toCurr.value.toLowerCase());
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    
    let response = await fetch(URL);
    let data = await response.json();
    
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    
    let totalAmount = `${rate * amtVal}`; 

    msg.innerHTML = `${amtVal} ${fromCurr.value} = ${totalAmount} ${toCurr.value}`;
});
