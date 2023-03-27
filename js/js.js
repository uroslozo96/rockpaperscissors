const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playerBtn = document.querySelector(".playBtn");
    const introScreen = document.querySelector(".intro");
    const scoreScreen = document.querySelector(".score");
    const match = document.querySelector(".match");

    playerBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      scoreScreen.classList.add("fadeIn");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // poziv funkcije za proveru
        compareHands(this.textContent, computerChoice);

        // update slika
        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    // nereseno
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      return;
    }
    // provera za kamen
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    // provera za papir
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    // provera za makaze
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  // Pozivanje "unutrasnjih" funkcija
  startGame();
  playMatch();
  compareHands();
};

// Pozivanje glave funkcije za igru
game();
