let totalScore, roundScore, activePlayer, dice, playGame;

totalScore = [0,0];
roundScore = 0;
activePlayer = 0;
playGame = true;


document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

document.querySelector(".diceImage").style.display = "none";

document.querySelector(".rollDice").addEventListener("click", throw_dice);

function throw_dice() {
    if (playGame == true) {
    let random_num = Math.ceil(Math.random() * 6);
    let diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    diceElement.src = "img/" + random_num + ".jpg";

    if(random_num !== 1) {
        roundScore = roundScore + random_num;
        score0 = roundScore;
        document.getElementById("currentScore-" + activePlayer).textContent = score0;
    } else {
        nextPlayer();
    }
}
}

function nextPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1;
    } else{
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    let diceHide = document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");

}

document.querySelector(".holdScore").addEventListener("click", holdMyScore);

function holdMyScore() {
    if (playGame == true) { 
    totalScore[activePlayer] += roundScore;
    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];

    if(totalScore[activePlayer] >= 100) {
        document.querySelector("#name-" + activePlayer).textContent = "Hráč" + " " + activePlayer + " " + "vyhrál";
        playGame = false;
    } else {
        nextPlayer();
    }
    }
}

document.querySelector(".newGame").addEventListener("click", newGame);

function newGame() {
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playGame == true;

    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";
    document.querySelector("#name-0").textContent = "Skóre 1. hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";

    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}

