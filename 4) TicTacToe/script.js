const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function placeMark(cellIndex) {
  if (gameActive && boardState[cellIndex] === '') {
    boardState[cellIndex] = currentPlayer;
    board.children[cellIndex].innerText = currentPlayer;
    if (checkWin()) {
      showResult(`${currentPlayer} wins!`);
      gameActive = false;
    } else if (checkDraw()) {
      showResult('It\'s a draw!');
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.innerText = `${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  return winCombos.some(combination => {
    return combination.every(index => {
      return boardState[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return boardState.every(cell => cell !== '');
}

function showResult(result) {
  message.innerText = result;
  if (result.includes('wins')) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerText = result;
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 2000);
  }
}



function newGame() {
  boardState = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  message.innerText = `${currentPlayer}'s turn`;
  board.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
