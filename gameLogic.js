//Gameplay Logic: r for Row, c for Column
const checkWinner = () => {
  let same = true;
  let temp;

  // Check row elements
  for (let i = 0; i < board.length; i += 1) {
    temp = board[i][0];
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] !== temp) {
        same = false;
      }
    }
    if (same && temp === "X") return 1;
    if (same && temp === "O") return 2;
  }

  return 0;
};
