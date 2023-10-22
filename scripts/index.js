const player1 = document.querySelectorAll("img")[0];
const player2 = document.querySelectorAll("img")[1];
const heading = document.querySelector("h1");

randomNumber1 = Math.floor((Math.random() * 6) + 1);
randomNumber2 = Math.floor((Math.random() * 6) + 1);

player1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
player2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = '&#128681Player 1 wins!';
    player1.classList.add("winner");
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = 'Player 2 wins!&#128681';
    player2.classList.add("winner");
} else {
    heading.textContent = 'Draw';
    player1.classList.add("winner");
    player2.classList.add("winner");
}
