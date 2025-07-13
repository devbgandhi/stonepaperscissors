let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a draw! ";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userSc.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice} `;
    } else {
        compScore++;
        compSc.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice} `;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (
            (userChoice === "stone" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "stone") ||
            (userChoice === "scissors" && compChoice === "paper")
        ) {
            userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
