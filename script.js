function getComputerChoice() {
	let choice = "";
	let randomNum = Math.floor(Math.random() * 3);
	if (randomNum === 0) {
		choice = "Rock";
	} else if (randomNum === 1) {
		choice = "Paper";
	} else {
		choice = "Scissors";
	}
	return choice
}


