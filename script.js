const maxRounds = 5;
const optionList = ["Rock", "Paper", "Scissors"];
let gameStatus = document.querySelector(".results > .game-status");
let humanScore = document.querySelector(".results > .human-score > span");
let computerScore = document.querySelector(".results > .computer-score > span");

function incrementScore(score) {
	score.textContent = parseInt(score.textContent) + 1;
}

function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);
	return randomNum + 1;
}

function playRound(humanChoice, computerChoice) {
	switch (humanChoice) {
		case 1:
			if (computerChoice === 2) {
				computerScore++;
				console.log("You lose! Paper beats Rock!");
			} else if (computerChoice === 3) {
				humanScore++;
				console.log("You win! Rock beats Scissors!");
			} else {
				console.log("Draw! You both picked Rock!");
			}
			break;
		case 2:
			if (computerChoice === 1) {
				humanScore++;
				console.log("You win! Paper beats Rock!");
			} else if (computerChoice === 3) {
				computerScore++;
				console.log("You lose! Scissors beats Paper!");
			} else {
				console.log("Draw! You both picked Paper!");
			}
			break;
		case 3:
			if (computerChoice === 1) {
				computerScore++;
				console.log("You lose! Rock beats Scissors!");
			} else if (computerChoice === 2) {
				humanScore++;
				console.log("You win! Scissors beats Paper!");
			} else {
				console.log("Draw! You both picked Scissors!");
			}
			break;
		default:
			break;

	}
}

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		let humanChoice = optionList.findIndex((curr) => {
			return curr === e.target.textContent;
		}) + 1;
		incrementScore(humanScore);
		incrementScore(computerScore);
	});
});

