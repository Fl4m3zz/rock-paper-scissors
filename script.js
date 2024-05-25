function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3);
	return randomNum + 1;
}

function getHumanChoice() {
	let choice = parseInt(prompt("Enter an option: \n 1) Rock \n 2) Paper \n 3) Scissors"));
	if (choice === 1 || choice == 2 || choice == 3) {
		return choice;
	} else {
		return undefined;
	}
}

function playGame() {

	let humanScore = 0;
	let computerScore = 0;

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
}

playGame()

