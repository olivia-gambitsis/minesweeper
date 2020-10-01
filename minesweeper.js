document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

/*
var board = {
  cells:[
   {row:0, col:0, isMine: false, hidden: true},
   {row:0, col:1, isMine: false, hidden: true}, 
   {row:0, col:2, isMine: false, hidden: true}, 
   {row:0, col:3, isMine: true, hidden: true},
   {row:1, col:0, isMine: false, hidden: true},
   {row:1, col:1, isMine: false, hidden: true}, 
   {row:1, col:2, isMine: false, hidden: true}, 
   {row:1, col:3, isMine: false, hidden: true},
   {row:2, col:0, isMine: false, hidden: true},
   {row:2, col:1, isMine: true, hidden: true}, 
   {row:2, col:2, isMine: false, hidden: true}, 
   {row:2, col:3, isMine: false, hidden: true},
   {row:4, col:0, isMine: false, hidden: true},
   {row:3, col:1, isMine: true, hidden: true}, 
   {row:3, col:2, isMine: false, hidden: true}, 
   {row:3, col:3, isMine: false, hidden: true}
]
}*/





const board = document.getElementsByClassName('board');


function generateBoard(){
  //let mines = [true,false];
  //let numberOfMines = Math.floor(Math.random() * 2);
  board.cells = [];
  let numberOfRows = 4;
  for (let i =0; i<numberOfRows; i++)//RUNS 0, 4 TIMES, RUNS 1, 4 TIMES, RUNS 2, 4 TIMES ETC
  for(let k=0; k<numberOfRows; k++){ // RUNS 0,1,2,3 --> 4 TIMES 
    board.cells.push({
      col:i,
      row: k,
      isMine: Math.random() >= 0.8, // 20% probability that the boolean value is "true". boolean is true = 1 or false = 0. 
      isMarked:false,
      hidden: true

    })
   
  }
//board.cells is an array of objects. There are 16 objects, each object has 5 properties. 
//the properties are row, col, isMine, isMarked and hidden. 
//
}

function restartGame(){
  document.location.href = ""; //reload current page
}



function startGame () {

  generateBoard()
  
lib.initBoard();// Don't remove this function call: it makes the game work!

for (let i=0; i<board.cells.length; i++){
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
   
}

document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  for(i=0; i<board.cells.length; i++){
    if(board.cells[i].isMine === true && board.cells[i].isMarked === false){
      return;
    }if (board.cells[i].isMine ===false && board.cells[i].hidden === true){
      return;}
  }
  lib.displayMessage('You win!');
  }
  
  
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
     // return lib.displayMessage('You win!');}



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.


function countSurroundingMines (cell) {
  
let surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
let count =0;

for (i=0; i<surroundingCells.length; i++ )
  if(surroundingCells[i].isMine)
  {
    count++;
  }
  return count;
  }




