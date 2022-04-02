//Global Variables: Board, Current Player, Board Element,
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// let boardContainer;
// let boardElement;
let currentPlayer = "X";

//Helper Functions: build board and display player's choice
const buildBoard = (board) => {
  const boardContainer = document.createElement("div");
  boardContainer.className = "container";
  document.body.append(boardContainer);
  for (let i = 0; i < board.length; i += 1) {
    const boardRow = document.createElement("div");
    boardRow.className = "row";
    boardContainer.append(boardRow);
    for (let j = 0; j < board[i].length; j += 1) {
      const boardElement = document.createElement("div");
      boardElement.className = "square";
      boardElement.addEventListener("click", () => {
        boardElement.innerText = squareClicked(i, j);
      });

      boardRow.append(boardElement);
    }
  }
};

const togglePlayer = () => {
  currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
  return currentPlayer;
};

const squareClicked = (row, column) => {
  board[row][column] = currentPlayer;
  togglePlayer();
  console.log(currentPlayer);
  return board[row][column];
};
// Initialize game
const initGame = () => {
  buildBoard(board);
};

initGame();
//Gameplay Logic
