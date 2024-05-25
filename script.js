const maxRounds = 5;
const optionList = ["Rock", "Paper", "Scissors"];
let gameStatus = document.querySelector(".results > .game-status");
let humanScore = document.querySelector(".results > .human-score > span");
let computerScore = document.querySelector(".results > .computer-score > span");
let roundCount = document.querySelector(".results > .round-count > span");

function incrementScore(score) {
	score.textContent = parseInt(score.textContent) + 1;
}

function changeStatus(text) {
	gameStatus.textContent = text;
}

function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);
	return randomNum + 1;
}

function playRound(humanChoice, computerChoice) {
	switch (humanChoice) {
		case 1:
			if (computerChoice === 2) {
				incrementScore(computerScore);
				changeStatus("You lose! Paper beats Rock!");
			} else if (computerChoice === 3) {
				incrementScore(humanScore);
				changeStatus("You win! Rock beats Scissors!");
			} else {
				changeStatus("Draw! You both picked Rock!");
			}
			break;
		case 2:
			if (computerChoice === 1) {
				incrementScore(humanScore);
				changeStatus("You win! Paper beats Rock!");
			} else if (computerChoice === 3) {
				incrementScore(computerScore);
				changeStatus("You lose! Scissors beats Paper!");
			} else {
				changeStatus("Draw! You both picked Paper!");
			}
			break;
		case 3:
			if (computerChoice === 1) {
				incrementScore(computerScore);
				changeStatus("You lose! Rock beats Scissors!");
			} else if (computerChoice === 2) {
				incrementScore(humanScore);
				changeStatus("You win! Scissors beats Paper!");
			} else {
				changeStatus("Draw! You both picked Scissors!");
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
		let roundCountNum = parseInt(roundCount.textContent);
		if (!(roundCountNum <= 0)) {
			playRound(humanChoice, getComputerChoice());
			roundCount.textContent = parseInt(roundCount.textContent) - 1;
			if (parseInt(roundCount.textContent) == 0) {
				humanScoreNum = parseInt(humanScore.textContent);
				computerScoreNum = parseInt(computerScore.textContent);
				if (humanScoreNum > computerScoreNum) {
					changeStatus("You won!");
				} else if (computerScoreNum > humanScoreNum) {
					changeStatus("You lost!");
				} else {
					changeStatus("Draw!");
				}

				humanScoreMessage = document.querySelector(".results > .human-score");
				playAgain = document.createElement("button");
				playAgain.setAttribute("id", "play-again");
				playAgain.textContent = "Play Again";
				playAgain.addEventListener("click", (e) => {
					roundCount.textContent = maxRounds;
					playAgainButtons = document.querySelectorAll(".results > #play-again");
					playAgainButtons.forEach((button) => {
						document.querySelector(".results").removeChild(button);	
					});
					humanScore.textContent = 0;
					computerScore.textContent = 0;
					gameStatus.textContent = "Choose an option above to start";
				});

				document.querySelector(".results").insertBefore(playAgain, humanScoreMessage);
			}
		}
	});
});

