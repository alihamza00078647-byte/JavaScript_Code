let userScore = 0;
let compScore = 0;

const boxes = document.querySelectorAll(".parentDiv");
let msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#userScore");
const compScoreBoard = document.querySelector("#compScore");


const compChoice = () => {          // Computer Choice
    const options = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    console.log(`You Choose = ${options[randomChoice]}`);
    return options[randomChoice];
}

const finalWinner = (winner) => {
    msg.innerText = winner;
    msg.style.backgroundColor = "#04bd04";
    userScoreBoard.innerText = userScore;
}
const finalLoser = (loser) => {
    msg.innerText = loser;
    msg.style.backgroundColor = "#d40222";
    compScoreBoard.innerText = compScore;
} 

const showWinner = (isUserWin) => {
    let winner = "";
    let loser = "";
    if (isUserWin === true){
        winner = `You Win!`;
        userScore++;
        finalWinner(winner);
    } else {
        loser = `You Lose!`;
        compScore++;
        finalLoser(loser);
    }
}

boxes.forEach((box) => {        // User Choice
    box.addEventListener("click" ,() => {
        const id = box.getAttribute("id");
        console.log(`You Choose = ${id}`);
        playGame(id);
    });
});
const drawGame = () => { 
    console.log("Its a Draw");
    msg.innerText = "Its a Draw!";
    msg.style.backgroundColor = "orange";
} 

const playGame = (id) => {
    let comp = compChoice();
    let user = id;
    let isUserWin = true;

    if (comp === user){
        drawGame();
    } else {
        if (user === "rock"){
            // paper, scissors
            isUserWin = comp === "paper"? false: true;
        } else if (user === "paper"){
            // rock , scissors
            isUserWin = comp === "rock"? false: true; 
        } else {
            // paper , rock
            isUserWin = comp === "paper"? true: false;
        }
        showWinner(isUserWin);
    }
}
