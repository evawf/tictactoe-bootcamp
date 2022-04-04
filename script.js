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

// //Gameplay Logic: r for Row, c for Column
// const checkWinner = () => {
//   for (let i = 0; i < board.length; i += 1) {
//     let tempR = board[i][0];
//     let sameValue = true;
//     for (let j = 0; j < board[i].length; j += 1) {
//       if (board[i][j] !== tempR) sameValue = false;
//     }
//     if (sameValue && tempR === "X") return 1;
//     if (sameValue && tempR === "O") return 2;
//   }
//   for (let i = 0; i < board.length; i += 1) {
//     let tempR = board[0][i];
//     let sameValue = true;
//     for (let j = 0; j < board[i].length; j += 1) {
//       if (board[j][i] !== tempR) sameValue = false;
//     }
//     if (sameValue && tempR === "X") return 1;
//     if (sameValue && tempR === "O") return 2;
//   }

//   let tempD = board[0][0];
//   let sameValue = true;
//   for (let i = 0; i < board.length; i += 1) {
//     if (board[i][i] !== tempD) sameValue = false;
//   }
//   if (sameValue && tempD === "X") return 1;
//   if (sameValue && tempD === "O") return 2;

//   tempD = board[0][board.length - 1];
//   sameValue = true;
//   for (let i = 0; i < board.length; i += 1) {
//     if (board[i][board.length - i - 1] !== tempD) sameValue = false;
//   }
//   if (sameValue && tempD === "X") return 1;
//   if (sameValue && tempD === "O") return 2;

//   // // check rows
//   // for (let i = 0; i < board.length; i += 1) {
//   //   tempR = board[i][0];
//   //   console.log(`${[i]}0: ${tempR}`);
//   //   for (let j = 1; j < board[i].length - 1; j += 1) {
//   //     if (board[i][j] === tempR && board[i][j + 1] === tempR && tempR !== "")
//   //       sameValue = true;
//   //   }
//   //   console.log(sameValue);
//   //   if (sameValue && tempR === "X") return 1;
//   //   if (sameValue && tempR === "O") return 2;
//   // }

//   // // check columns
//   // for (let i = 0; i < board.length; i += 1) {
//   //   tempC = board[0][i];
//   //   for (let j = 1; j < board[i].length - 1; j += 1) {
//   //     if (board[j][i] === tempC && board[j + 1][i] === tempC && tempC !== "")
//   //       sameValue = true;
//   //   }
//   //   console.log(sameValue);
//   //   if (sameValue && tempC === "X") return 1;
//   //   if (sameValue && tempC === "O") return 2;
//   // }

//   // // check cross - right
//   // for (let i = 1; i < board.length - 1; i += 1) {
//   //   let temp = board[0][0];
//   //   if (board[i][i] === temp && board[i + 1][i + 1] === temp && temp !== "")
//   //     sameValue = true;
//   //   if (sameValue && temp === "X") return 1;
//   //   if (sameValue && temp === "O") return 2;
//   // }

//   // // check cross - left
//   // for (let i = 0; i < board.length; i += 1) {
//   //   let temp = board[board.length - 1][i];
//   //   for (let j = board[i].length - 1; j > 0; j -= 1) {
//   //     if (board[i][j] === temp && board[(i + 1)][(j - 1)] === temp && temp !== "")
//   //       sameValue = true;
//   //   }
//   //   if (sameValue && temp === "X") return 1;
//   //   if (sameValue && temp === "O") return 2;
//   // }

//   return 0;
// };

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
      return (outputMsgDiv.innerText = `Player ${winner} won.`);
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
