// const URL = "https://dogapi.dog/api/v2/facts";
const pic = document.querySelector(".pic");
const btn = document.querySelector("#btn");


// const getData = async () => {
//     let response = await fetch(URL);
//     console.log(response); //JSON format
//     let data = await response.json();
//     console.log(data[0].text);
// }
const URL = "https://dogapi.dog/api/v2/facts";

const getData = async () => {
  try {
    let response = await fetch(URL);
    console.log(response); // raw response
    let json = await response.json();
    console.log(json);      // inspect full structure
    // then pull the fact:
    console.log(json.data[0].attributes.body);
    pic.innerHTML = `${json.data[0].attributes.body}`;

  } catch (err) {
    console.error("Error fetching dog fact:", err);
  }
}

btn.addEventListener("click", getData);
// setInterval(getData, 10000);
