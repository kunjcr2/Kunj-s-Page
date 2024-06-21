let userScore = 0;
let compScore = 0;
let usr = document.querySelector("#user-score");
let cmp = document.querySelector("#comp-score");
let msgs = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const genCompChoice = (userChoice) => {
    const options = ["rock", "paper", "scissors"];
    const compChoice = options[Math.floor(Math.random() * 3)]; // Generate computer's choice once

    if (
        (compChoice === "rock" && userChoice === "paper") ||
        (compChoice === "paper" && userChoice === "scissors") ||
        (compChoice === "scissors" && userChoice === "rock")
    ) {
        usr.innerText = ++userScore; // Increment user score
        msgs.innerText = "You win !!!";
        document.body.style.background = "Green";
    } else if (
        (compChoice === "rock" && userChoice === "scissors") ||
        (compChoice === "paper" && userChoice === "rock") ||
        (compChoice === "scissors" && userChoice === "paper")
    ) {
        cmp.innerText = ++compScore; // Increment computer score
        msgs.innerText = "You loose !!!";
        document.body.style.background = "Red";
    } else {
        msgs.innerText = "Both did same. DRAW.";
        document.body.style.background = "White";
    }
}

const playGame = (userChoice) => {
    //Computer Generator
    genCompChoice(userChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
