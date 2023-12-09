let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const reset = document.querySelector("#reset");

const drawGame = () => {
    msg.innerText = "Game is draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        user++;
        userScore.innerText = user;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore.style.color = "green";
    }
    else{
        comp++;
        compScore.innerText = comp;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore.style.color = "green";
    }
};

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = genComChoice();

    if(compChoice === userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // Scissors, Paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // Rock, Scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // Rock, Paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

const resetGame = () => {
    user = 0;
    comp = 0;
    userScore.innerText = 0;
    compScore.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
};

reset.addEventListener("click", resetGame);
