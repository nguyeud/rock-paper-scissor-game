// Buttons
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissor = document.getElementById("scissor");
let buttonReset = document.getElementById("reset"); 

// Text/images that will need to change
let textResultTitle = document.getElementById("result-title");
let textResultBody = document.getElementById("result-body");
let textResultPlayer = document.getElementById("result-player");
let textResultComputer = document.getElementById("result-computer");
let textRoundNum = document.getElementById("round-num");
let textWinner = document.getElementById("text-winner");
let imgPlayer = document.getElementsByClassName("image-player")[0];
let imgComputer = document.getElementsByClassName("image-computer")[0];
let imgRock = document.getElementsByClassName("rock")[0];
let imgPaper = document.getElementsByClassName("paper")[0];
let imgScissor = document.getElementsByClassName("scissor")[0];

// Define variables
let playerResult = 0;
let computerResult = 0;
let roundNum = 0;

// Computer selects random string in array
function computerPlay() {
    let selections = [
        "Rock",
        "Paper",
        "Scissor"
    ];
    let computerChoice = selections[Math.floor(Math.random()*selections.length)];
    return computerChoice
};

// Compares player's choice to computer's choice and return result, player's choice, computer's choice, and round number
function playRound(playerChoice, computerChoice) {
    // Rock beats Scissors
    // Paper beats Rock
    // Scissor beats Paper
    // If playerSelection == computerSelection, tie

    if (playerChoice == computerChoice) {
        roundNum ++;
        return ["tied", playerResult, computerResult, roundNum];
    } else if (playerChoice == "Rock") {
        if (computerChoice == "Paper") {
            computerResult ++;
            roundNum ++;
            return ["lost", playerResult, computerResult, roundNum];
        } else if (computerChoice == "Scissor") {
            playerResult ++;
            roundNum ++;
            return ["won", playerResult, computerResult, roundNum];
        }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Scissor") {
            computerResult ++;
            roundNum ++;
            return ["lost", playerResult, computerResult, roundNum];
        } else if (computerChoice == "Rock") {
            playerResult ++;
            roundNum ++;
            return ["won", playerResult, computerResult, roundNum];
        }
    } else if (playerChoice == "Scissor") {
        if (computerChoice == "Rock") {
            computerResult ++;
            roundNum ++;
            return ["lost", playerResult, computerResult, roundNum];
        } else if (computerChoice == "Paper") {
            playerResult ++;
            roundNum ++;
            return ["won", playerResult, computerResult, roundNum];
        } 
    } else {
        return "Error"
    };
};

// The function to trigger game
function game() {
    // Define variables
    let playerChoice = "";
    let computerChoice = "";
    let result = "";

    // Activates upon click on buttons
    // When player chooses the Rock choice...
    buttonRock.addEventListener("click", function() {
        playerChoice = "Rock";
        computerChoice = computerPlay();
        result = playRound(playerChoice, computerChoice);
        // Replaces .content .result .title text
        if (result[0] == "tied") {
            textResultTitle.innerHTML = "It's a tie!";
        } else {
            textResultTitle.innerHTML = "You " + result[0] + "!";
        }
        // Replaces .content .result .body text
        if (result[0] == "won") {
            textResultBody.innerHTML = playerChoice + " beats " + computerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        } else if (result[0] == "lost") {
            textResultBody.innerHTML = computerChoice + " beats " + playerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        } else if (result[0] == "tied") {
            textResultBody.innerHTML = playerChoice + " ties with " + computerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        }
        // Replaces .content .choice .player image
        imgPlayer.src = "./images/rock-2.png"
        // Replaces .content .choice .computer image
        if (computerChoice == "Rock") {
            imgComputer.src = "./images/rock-2.png"
        } else if (computerChoice == "Paper") {
            imgComputer.src = "./images/paper-2.png"
        } else if (computerChoice == "Scissor") {
            imgComputer.src = "./images/scissor-2.png"
        }
        // Disables player choice buttons and toggles 'Play Again' button to visible
        if (result[1] == 5 || result[2] == 5) {
            imgRock.src = "./images/rock-3.png"
            imgPaper.src = "./images/paper-3.png"
            imgScissor.src = "./images/scissor-3.png"
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissor.disabled = true;
            buttonReset.style.visibility = "visible";
            textWinner.style.visibility = "visible";
            if (result[1] == 5) {
                textWinner.innerText = "The player is the winner!"
            } else if (result[2] == 5) {
                textWinner.innerText = "The computer is the winner!"
            }
        } else {
            buttonRock.disabled = false;
            buttonPaper.disabled = false;
            buttonScissor.disabled = false;
            buttonReset.style.visibility = "hidden";
        }
    });

    // When player chooses the Paper choice...
    buttonPaper.addEventListener("click", function() {
        playerChoice = "Paper";
        computerChoice = computerPlay();
        result = playRound(playerChoice, computerChoice);
        console.log("Result: " + result[0]);
        console.log("Player results: " + result[1]);
        console.log("Computer results: " + result[2]);
        // Replaces .content .result .title text
        if (result[0] == "tied") {
            textResultTitle.innerHTML = "It's a tie!";
        } else {
            textResultTitle.innerHTML = "You " + result[0] + "!";
        }
        // Replaces .content .result .body text
        if (result[0] == "won") {
            textResultBody.innerHTML = playerChoice + " beats " + computerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        } else if (result[0] == "lost") {
            textResultBody.innerHTML = computerChoice + " beats " + playerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        } else if (result[0] == "tied") {
            textResultBody.innerHTML = playerChoice + " ties with " + computerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        }
        // Replaces .content .choice .player image
        imgPlayer.src = "./images/paper-2.png"
        // Replaces .content .choice .computer image
        if (computerChoice == "Rock") {
            imgComputer.src = "./images/rock-2.png"
        } else if (computerChoice == "Paper") {
            imgComputer.src = "./images/paper-2.png"
        } else if (computerChoice == "Scissor") {
            imgComputer.src = "./images/scissor-2.png"
        }
        if (result[1] == 5 || result[2] == 5) {
            imgRock.src = "./images/rock-3.png"
            imgPaper.src = "./images/paper-3.png"
            imgScissor.src = "./images/scissor-3.png"
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissor.disabled = true;
            buttonReset.style.visibility = "visible";
            textWinner.style.visibility = "visible";
            if (result[1] == 5) {
                textWinner.innerText = "The player is the winner!"
            } else if (result[2] == 5) {
                textWinner.innerText = "The computer is the winner!"
            }
        } else {
            buttonRock.disabled = false;
            buttonPaper.disabled = false;
            buttonScissor.disabled = false;
            buttonReset.style.visibility = "hidden";
        }
    });

    // When player chooses the Scissor choice...
    buttonScissor.addEventListener("click", function() {
        playerChoice = "Scissor";
        computerChoice = computerPlay();
        result = playRound(playerChoice, computerChoice);
        console.log("Result: " + result[0]);
        console.log("Player results: " + result[1]);
        console.log("Computer results: " + result[2]);
        // Replaces .content .result .title text
        if (result[0] == "tied") {
            textResultTitle.innerHTML = "It's a tie!";
        } else {
            textResultTitle.innerHTML = "You " + result[0] + "!";
        }
        // Replaces .content .result .body text
        if (result[0] == "won") {
            textResultBody.innerHTML = playerChoice + " beats " + computerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        } else if (result[0] == "lost") {
            textResultBody.innerHTML = computerChoice + " beats " + playerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        } else if (result[0] == "tied") {
            textResultBody.innerHTML = playerChoice + " ties with " + computerChoice + ".";
            textResultPlayer.innerHTML = result[1];
            textResultComputer.innerHTML = result[2];
            textRoundNum.innerHTML = result[3];
        }
        // Replaces .content .choice .player image
        imgPlayer.src = "./images/scissor-2.png"
        // Replaces .content .choice .computer image
        if (computerChoice == "Rock") {
            imgComputer.src = "./images/rock-2.png"
        } else if (computerChoice == "Paper") {
            imgComputer.src = "./images/paper-2.png"
        } else if (computerChoice == "Scissor") {
            imgComputer.src = "./images/scissor-2.png"
        }
        if (result[1] == 5 || result[2] == 5) {
            imgRock.src = "./images/rock-3.png"
            imgPaper.src = "./images/paper-3.png"
            imgScissor.src = "./images/scissor-3.png"
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissor.disabled = true;
            buttonReset.style.visibility = "visible";
            textWinner.style.visibility = "visible";
            if (result[1] == 5) {
                textWinner.innerText = "The player is the winner!"
            } else if (result[2] == 5) {
                textWinner.innerText = "The computer is the winner!"
            }
        } else {
            buttonRock.disabled = false;
            buttonPaper.disabled = false;
            buttonScissor.disabled = false;
            buttonReset.style.visibility = "hidden";
        }
    });

    buttonReset.addEventListener("click", function() {
        window.location.reload()
    });
};

game();