---
title: Tutorial
---

Tutorial: Building a Tic-Tac-Toe Game with React

## 1. Introduction

**Goal**: This is an extra note for the official React Tic-Tac-Toe tutorial (https://react.dev/learn/tutorial-tic-tac-toe). I’m putting the code into my own words to make sure I really get it and to keep track of my progress. The whole code is uploaded in the repository [Lern-Periode 13](https://github.com/Fynn8962/Lern-Periode-13)

**Experience needed**: HTML, CSS, JavaScript and knowledge of variables and functions


&nbsp;




### 1. The Square Component:

```
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

Explanation: The `Square` is a "dumb" component. It does not store any data itself. It relies entirely on props passed down from the parent:

- `value`: Determines what to show ('X', 'O' or null).

- `onSquareClick`: A function used to communicate with the parent (Board) when clicked.

- Note on Naming: We use `onSquareClick` (prop) and `onClick` (HTML attribute). This separates the React event logic from the browser's native event.



&nbsp;




### 2. The Board Component:

```
// Inside Board Component
return (
  <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      {/* ... other squares ... */}
    </div>
  </>
);
```

Explanation: The `Board` receives the state from the `Game` component.

- The Arrow Function `() =>`: We pass `() => handleClick(0)` instead of `handleClick(0)`.
  
  - Why? If we wrote `handleClick(0)`, JavaScript would execute the function immediately during rendering, causing an infinite loop of re-renders.
  
  - The arrow function acts as a wrapper (a brake).


&nbsp;



### 3. Game Logic & Immutability:

```
function handleClick(i) {
  // 1. Validation: Stop if square is filled or game is won
  if (calculateWinner(squares) || squares[i]) {
    return;
  }

  // 2. Immutability: Create a copy
  const nextSquares = squares.slice();

  // 3. Update the specific square
  if (xIsNext) {
    nextSquares[i] = 'X';
  } else {
    nextSquares[i] = 'O';
  }

  // 4. Notify parent
  onPlay(nextSquares);
}
```

Explanation:

Explanation:

- Immutability (`.slice()`): We do not modify the `squares` array directly. Instead, we create a copy using `.slice()`. This is important for the "Time Travel" feature, as it preserves previous versions of the board unchanged.

- Toggling Players: We use the logic `if (xIsNext)` to determine who plays next.

- Updating States: Finally, we call `onPlay`, which sends the new data up to the `Game` component.
  
&nbsp;



### 4. Declaring a Winner

```
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Returns 'X' or 'O'
    }
  }
  return null;
}
```

Explanation: This function acts as the referee.

- It defines all 8 winning lines (rows, columns, diagonals).

- It loops through these lines and checks if three squares contain the same symbol (and are not null).

- If a match is found, it returns the winner; otherwise, it returns `null`.
  


&nbsp;



### 5. Time Travel (Game Component)

Explanation:

```
export default function Game() {
  // 1. State: Keeps track of all moves (history) and the current step
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  
  // 2. Logic: Calculate who is next based on the move number
  const xIsNext = currentMove % 2 === 0;
  
  // 3. Logic: Determine the current board state to show
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    // ... logic to update history ...
  }
  // ...
}
```

- Single Source of Truth: The `Game` component holds the `history` (an array of all past board states).

- Spread Syntax (`...`): In `handlePlay`, we use `[...history, nextSquares]` to create a new array that contains all previous moves plus the new one. This triggers a re-render in React.
  
&nbsp;



### 6. Rendering the History List

```
const moves = history.map((squares, move) => {
  // ... logic for description ...
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```



Explanation:

- `.map()` Method: Transforms the raw data (history array) into visual UI elements (buttons).

- `key` Property: We assign a unique `key={move}` to each list item. This acts like an ID card, helping React distinguish between items when the list is updated or re-ordered, ensuring efficient rendering.




