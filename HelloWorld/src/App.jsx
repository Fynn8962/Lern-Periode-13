import { useState } from "react";

// components for a sqaure
function Square() {
  
  // value - stores the Value 
  // setValue - function to change the value 
  // null - passed a initial value for this state variable
  const [value, setValue] = useState(null);
  

  // handle click of the Button
  function handleClick() {
    setValue('X');
  }

  // Loading the Button in HTML
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  );
}

// using th Square component in the Board function 
export default function Board() {
  return (
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    </>
  );
}
