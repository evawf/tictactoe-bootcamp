//Gameplay Logic: r for Row, c for Column
const checkWinner = () => {
  // check rows
  for (let i = 0; i < board.length; i += 1) {
    let tempR = board[i][0];
    let sameValue = true;
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] !== tempR) sameValue = false;
    }
    if (sameValue && tempR === "X") return 1;
    if (sameValue && tempR === "O") return 2;
  }
  //check columns
  for (let i = 0; i < board.length; i += 1) {
    let tempR = board[0][i];
    let sameValue = true;
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[j][i] !== tempR) sameValue = false;
    }
    if (sameValue && tempR === "X") return 1;
    if (sameValue && tempR === "O") return 2;
  }
  //check diagonal row 1
  let tempD = board[0][0];
  let sameValue = true;
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][i] !== tempD) sameValue = false;
  }
  if (sameValue && tempD === "X") return 1;
  if (sameValue && tempD === "O") return 2;

  //check diagonal row 2
  tempD = board[0][board.length - 1];
  sameValue = true;
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][board.length - i - 1] !== tempD) sameValue = false;
  }
  if (sameValue && tempD === "X") return 1;
  if (sameValue && tempD === "O") return 2;
  return 0;
};
