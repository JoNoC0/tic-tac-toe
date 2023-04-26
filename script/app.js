// Initialize variables
let currentPlayer = 'X';
let gameStatus = [];
let message = document.getElementById('message');

// Initialize game board
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

// Reset game board
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  gameStatus = [];
  for (let i = 0; i < 9; i++) {
    gameStatus.push('');
    let square = document.getElementById(i);
    square.innerHTML = '';
    square.style.color = 'black';
  }
  message.innerHTML = '';
  currentPlayer = 'X';
});

// Check for a win
function checkWin() {
  let winCombinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combination of winCombinations) {
    if (
      gameStatus[combination[0]] === currentPlayer &&
      gameStatus[combination[1]] === currentPlayer &&
      gameStatus[combination[2]] === currentPlayer
    ) {
      message.innerHTML = `Player ${currentPlayer} wins`
    }
}
};
