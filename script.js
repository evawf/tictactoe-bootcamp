//Global Variables: Board, Current Player, Board Element,
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// let boardContainer;
// let boardElement;
let outputMsg = "Player1's turn.";
let currentPlayer = "X";
const outputMsgDiv = document.createElement("div");

//Helper Functions: build board and display player's choice
const buildBoard = (board) => {
  const boardContainer = document.createElement("div");
  boardContainer.className = "container";

  outputMsgDiv.className = "outputMsg";
  outputMsgDiv.innerText = outputMsg;

  document.body.append(outputMsgDiv, boardContainer);
  for (let i = 0; i < board.length; i += 1) {
    const boardRow = document.createElement("div");
    boardRow.className = "row";
    boardContainer.append(boardRow);
    for (let j = 0; j < board[i].length; j += 1) {
      const boardElement = document.createElement("div");

      boardElement.className = "square";
      boardElement.addEventListener("click", (event) => {
        handleClick(event, i, j);
      });
      boardRow.append(boardElement);
    }
  }
};
let there_is_a_winner = false;
const handleClick = (event, i, j) => {
  if (there_is_a_winner) return;
  // console.log(event);
  outputMsgDiv.innerText = printMsg(currentPlayer);
  if (event.target.innerText === "") {
    event.target.innerText = squareClicked(i, j);
    const winner = checkWinner();
    if (winner !== 0) {
      there_is_a_winner = true;
      outputMsgDiv.innerText = `Player ${winner} win`;
    }
  }
};

const printMsg = (player) => {
  currentPlayer === "O"
    ? (outputMsg = "Player1's turn.")
    : (outputMsg = "Player2's turn.");
  return outputMsg;
};

const togglePlayer = () => {
  currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
  return currentPlayer;
};

const squareClicked = (row, column) => {
  board[row][column] = currentPlayer;
  togglePlayer();
  return board[row][column];
};
// Initialize game
const initGame = () => {
  buildBoard(board);
};

initGame();
//Gameplay Logic: r for Row, c for Column
// const checkWinner = (r, c) => {};
