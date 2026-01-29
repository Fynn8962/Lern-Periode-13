import { useState } from "react";

// components for a sqaure
function Square({value, onSquareClick}) {

// We use onSquareClick so the child (Square) can communicate with the parent (Board).
// The Square cannot access the array directly because the state (the "brain") is managed solely by the Board.
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

// using th Square component in the Board function 
function Board({ xIsNext, squares, onPlay}) {
  


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
    onPlay(nextSquares);

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

// function to allow time traveling (is the new top level component)
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]) // array with a single item, which itself contains an array of 9 nulls.
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  // this function is called by the Board component to update the game. 
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // turns around the value of xIsNext
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 == 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
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




