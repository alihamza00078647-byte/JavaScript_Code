const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector("#msg");
let winnerMsg = document.querySelector(".winnerMsg");

let turn = true; // Turn of the player 


const winPattern = [
    [0, 1, 2],          // How a Winner Can Win OR Winning Positions
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let resetGame = () => {
    let turn = true;
    enabledBoxes();
    winnerMsg.classList.add("hide");
}

// Assign the turn X then O player
boxes.forEach(box => {
    box.addEventListener("click" , () => {
        if (turn){
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
})


let showWinner = (winner) => { // Show Message for the Winner
    winnerMsg.innerText = `Congratulation, Player ${winner}`;
    winnerMsg.classList.remove("hide");
}
let disabledBoxes = () => { // Disabled buttons when winner Found
    for (let box of boxes){
        box.disabled = true;
    }
}

let enabledBoxes = () => { // enabled all buttons when Reset the Game
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


let checkWinner = () => {       // Check Winner by position
    for (let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText; // Check at position 1 also its Content X or 0
        let pos2 = boxes[pattern[1]].innerText; // Check at position 1 also its Content X or 0
        let pos3 = boxes[pattern[2]].innerText; // Check at position 1 also its Content X or 0
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                disabledBoxes(); // Disabled all buttons after Winning
            }
        }
    }
} 

reset.addEventListener("click", resetGame);

newGame.addEventListener("click", resetGame);