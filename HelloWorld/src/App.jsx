import { useState } from "react";

// components for a sqaure
function Square({value, onSquareClick}) {

// We use onSquareClick so the child (Square) can communicate with the parent (Board).
// The Square cannot access the array directly because the state (the "brain") is managed solely by the Board.
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

// using th Square component in the Board function 
export default function Board() {
  
  const [xIsNext, setXIsNext] = useState(true);

  // collect and manage data from all children centrally
  //pass the value prop down to each Square that renders --> value={squares[0]}
  // squares contains an array value
  const [squares, setSquares] = useState(Array(9).fill(null));

// .slice() creates a copy of the squares array, so the original array wont be changed
// nextSquares takes the index i of the  sqaure to be updated and sets an X
  function handleClick(i) {
    
    // check if square already has a value / check winner
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);

    // turns around the value of xIsNext
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
// () => is an arrow function.
// When onSquareClick triggers, it executes this arrow function, which then calls handleClick(0).
  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>

    </>
    
  );


}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}




