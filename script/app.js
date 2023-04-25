// initialize variables
let currentPlayer = 'X';
let gameStatus = [];
let message = document.getElementById('message');

// initialize game board
for (let i = 0; i < 9; i++) {
    gameStatus.push('');
    let square = document.getElementById(i);
    square.addEventListener('click', () => {
        if (gameStatus[i] === '') {
            gameStatus[i] = currentPlayer;
            square.innerHTML = currentPlayer;
            square.style.color = currentPlayer === 'X' ? 'red' : 'blue';
            checkWin();
            switchPlayer();
        }
    });
}