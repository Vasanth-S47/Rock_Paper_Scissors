import { getUserChoice } from "../Javascript/user.js";
import { getRobotChoice } from "../Javascript/robot.js";

const gameState = {
    userScore: 0,
    robotScore: 0,
    updateScore(result) {
        if (result === "You win!") {
            this.userScore++;
        } else if (result === "Robot wins!") {
            this.robotScore++;
        }
    }
}
//let userScore = 0;
//let robotScore = 0;

document.querySelectorAll(".user-choice").forEach(button => {
    button.addEventListener("click", function() {
        const userChoice = getUserChoice(this.dataset.choice);
        const robotChoice = getRobotChoice();

        document.querySelectorAll(".user-choice").forEach(btn => {
            btn.style.backgroundColor = "";
        });

        document.querySelectorAll(".robot-choice").forEach(btn => {
            btn.style.backgroundColor = "";
        });
        
       document.querySelector(`.user-choice[data-choice='${userChoice}']`).style.backgroundColor = "yellow";

        document.querySelector(`.robot-choice[data-choice='${robotChoice}']`).style.backgroundColor = "yellow";


        const result = determineWinner(userChoice, robotChoice);
        document.getElementById("result").textContent = `You chose ${userChoice}, Robot chose ${robotChoice}. ${result}`;
        
        /*if (result === "You win!") {
            userScore++;
        } else if (result === "Robot wins!") {
            robotScore++;
        }*/

        gameState.updateScore(result);
        
        document.getElementById("user-score").textContent = gameState.userScore;
        document.getElementById("robot-score").textContent = gameState.robotScore;
    });
});

function determineWinner(user, robot) {
    if (user === robot) return "It's a tie!";
    if (
        (user === "rock" && robot === "scissors") ||
        (user === "scissors" && robot === "paper") ||
        (user === "paper" && robot === "rock")
    ) {
        return "You win!";
    }
    return "Robot wins!";
}
