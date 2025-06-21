// script.js
// Get the HTML elements
const board = document.getElementById('board');
const cells = document.querySelectorAll('#board td');
const resetButton = document.getElementById('reset');

// Initialize the game state
let currentPlayer = 'X';
let gameOver = false;

// Function to handle cell click
function handleCellClick(event) {
  if (gameOver) return;
  const cell = event.target;
  if (cell.textContent !== '') return;
  cell.textContent = currentPlayer;
  checkForWin();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check for win
function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const combination of winningCombinations) {
    const cell1 = cells[combination[0]].textContent;
    const cell2 = cells[combination[1]].textContent;
    const cell3 = cells[combination[2]].textContent;
    if (cell1 === cell2 && cell2 === cell3 && cell1 !== '') {
      gameOver = true;
      alert(`Player ${cell1} wins!`);
      return;
    }
  }
  if (cells.every(cell => cell.textContent !== '')) {
    gameOver = true;
    alert('It\'s a draw!');
  }
}

// Function to reset the game
function resetGame() {
  currentPlayer = 'X';
  gameOver = false;
  cells.forEach(cell => cell.textContent = '');
}

// Add event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);