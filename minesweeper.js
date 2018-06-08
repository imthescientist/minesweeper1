const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rows = 0; rows < numberOfRows; rows++) {
    const row = [];
    for (let columns = []; columns < numberOfColumns; columns++){
     row.push(' ');
   }
   board.push(row);
 } return board;
};// generates player board

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
 const board = []
  for (let rows = 0; rows < numberOfRows; rows++){
    const row = [];
   for (let columns = 0; columns < numberOfColumns; columns++){
    row.push(null);
  } board.push(row);
}// generates bomb board
 let numberOfBombsPlaced = 0
  while (numberOfBombsPlaced < numberOfBombs){
  const row = []
  row.push('B')
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  if (board[randomRowIndex, randomColumnIndex] !== 'B') {
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  };
 board[randomRowIndex][randomColumnIndex] = 'B';
 numberOfBombsPlaced++;
} // must change in order to prevent bombs in the same spot
 return board
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  numberOfRows = bombBoard.length;
  numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
  if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
     neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
       if(bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
         numberOfBombs++;
       }
     }
  });

  return numberOfBombs;
}

   const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    if (playerBoard[rowIndex], [columnIndex] !== ' '){
      console.log('This tile has already been flipped!')
      return;
    } else if (bombBoard[rowIndex], [columnIndex] === 'B') {
      playerBoard[rowIndex], [columnIndex] = 'B'
    } else {
      playerBoard[rowIndex], [columnIndex] =
      getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
    }
   }


const printBoard = (board) => {
console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board:');
printBoard(playerBoard)
console.log('Bomb board:');
printBoard(bombBoard)

flipTile(playerBoard, bombBoard, 1, 0);
console.log('Updated Player Board');
printBoard(playerBoard)
